import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  User,
  Users,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Quote,
  Target,
  CircleCheck,
  MousePointerClick,
  LineChart,
  Check,
  Copy,
  Instagram,
  List,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { fetchGoogleSheetsData } from "@/hooks/useBlogData";
import { toast } from "sonner";

interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  author: string;
  category: string | null;
  tags: string[] | null;
  published_at: string | number | null;
}
 
const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
>([]);
  const [progress, setProgress] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
 
  useEffect(() => {
    if (slug) {
      const stored = localStorage.getItem(`bookmark_${slug}`);
      setIsBookmarked(stored === 'true');
    }
  }, [slug]);

  const toggleBookmark = () => {
    const newValue = !isBookmarked;
    setIsBookmarked(newValue);
    if (newValue) {
      localStorage.setItem(`bookmark_${slug}`, 'true');
      toast.success("Article bookmarked");
    } else {
      localStorage.removeItem(`bookmark_${slug}`);
      toast.info("Bookmark removed");
    }
  };
 
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
 
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setProgress(Math.round(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);
 
  useEffect(() => {
    if (!slug) {
      setNotFound(true);
      setLoading(false);
      return;
    }
 
    const fetchPost = async () => {
      setLoading(true);
 
      try {
        const googlePosts = await fetchGoogleSheetsData();
 
        const selectedPost = googlePosts.find((item) => item.slug === slug);
 
        if (!selectedPost) {
          setNotFound(true);
          return;
        }
 
        setPost({
          id: selectedPost.id,
          title: selectedPost.title,
          slug: selectedPost.slug,
          excerpt: selectedPost.excerpt,
          content: selectedPost.content,
          cover_image: selectedPost.cover_image,
          author: selectedPost.author,
          category: selectedPost.category,
          tags: [],
          published_at: selectedPost.published_at,
        });
 
        const otherPosts = googlePosts
          .filter((item) => item.slug !== slug)
          .slice(0, 3)
          .map((item) => ({
            id: item.id,
            title: item.title,
            slug: item.slug,
            excerpt: item.excerpt,
            content: item.content,
            cover_image: item.cover_image,
            author: item.author,
            category: item.category,
            tags: [],
            published_at: item.published_at,
          }));
 
        setRelatedPosts(otherPosts);
 
        setNotFound(false);
      } catch (err) {
        console.error(err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);
 
  useEffect(() => {
    if (!post || !post.content) return;
 
    // Wait for safely setting inner HTML
    const timer = setTimeout(() => {
      const container = document.getElementById("blog-content-container");
      if (!container) return;
 
      const elements = Array.from(container.querySelectorAll("h2, h3"));
      const newHeadings = elements.map((el, index) => {
        const text = el.textContent || "";
        const id =
          el.id ||
          text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "") ||
          `heading-${index}`;
        el.id = id;
        return {
          id,
          text,
          level: el.tagName === "H3" ? 3 : 2,
        };
      });
      setHeadings(newHeadings);
    }, 150);
 
    return () => clearTimeout(timer);
  }, [post]);
 
  const formatDate = (dateValue: string | number | null) => {
    if (!dateValue) return "";
 
    // Handle Google Sheets Date(year, month, day) format
    if (typeof dateValue === "string" && dateValue.startsWith("Date(")) {
      const match = dateValue.match(/Date\((\d+),(\d+),(\d+)/);
      if (match) {
        const year = parseInt(match[1]);
        const month = parseInt(match[2]);
        const day = parseInt(match[3]);
        const date = new Date(year, month, day);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
    }
 
    let numValue = typeof dateValue === "number" ? dateValue : Number(dateValue);
    if (!isNaN(numValue) && numValue > 0) {
      if (numValue < 100000) {
        // Excel serial date
        const utcDays = Math.floor(numValue - 25569);
        const utcValue = Math.max(0, utcDays * 86400);
        const date = new Date(utcValue * 1000);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
      
      // Timestamp
      if (numValue < 10000000000) numValue *= 1000; // convert seconds to ms
      return new Date(numValue).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
 
    const parsedDate = new Date(dateValue);
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
 
    return String(dateValue);
  };
 
  const getReadingTime = (content: string | undefined | null) => {
    if (!content) return 1;
    const text = content
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const words = text ? text.split(" ").length : 0;
    return Math.max(1, Math.ceil(words / 180));
  };
 
  const formatContent = (content: string | undefined | null) => {
    if (!content) return "<p>No content available.</p>";
 
    let html = content;
 
    if (!/<(p|div|h[1-6]|ul|ol|table)\b[^>]*>/i.test(content)) {
      // Pre-process markdown-like bold/italics
      let processedContent = content
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>");

      // Convert raw text into paragraph blocks, auto-detecting headings
      html = processedContent
        .split(/\n\n+/)
        .map((paragraph) => {
          const trimmed = paragraph.trim();
          if (!trimmed) return "";
          
          const plainText = trimmed.replace(/<[^>]*>/g, "");
          
          // Special Highlighted CTA Boxes
          const isQuestionCTA = plainText.match(/Have a Question|Need Digital Marketing Support/i);
          const isFollowCTA = plainText.match(/Follow .* for More|Follow Us|Follow Cybaem/i);

          if (isQuestionCTA || isFollowCTA) {
            let ctaLines = trimmed.split('\n').map(line => line.trim()).filter(Boolean);
            const titleLine = ctaLines[0] || "";
            const contentLines = ctaLines.slice(1);
            // Even if the text already contains <a> tags, this formatting will just wrap them nicely. 
            // We'll strip existing tags for the formatLinks replacement or just let the global replacer handle them.
            // But let's make sure we don't break existing <a> tags.
            const formatLinks = (text: string) => {
              // If it already has an <a> tag, just return it
              if (text.includes('<a ')) return text;
              return text.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-semibold break-all">$1</a>');
            };
            const icon = isQuestionCTA 
              ? '<svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>' 
              : '<svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>';
            return `
              <div class="not-prose my-12 relative overflow-hidden rounded-[24px] bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-10">
                <div class="absolute top-0 left-0 w-1.5 h-full bg-primary rounded-l-[24px]"></div>
                <div class="flex flex-col sm:flex-row items-start gap-5">
                  <div class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 shadow-sm border border-primary/20">
                    ${icon}
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="text-xl font-bold text-slate-900 mb-3 tracking-tight font-display">${titleLine.replace(/^[^\w\s<]+/, '').trim()}</h4>
                    <div class="space-y-2 text-slate-600 text-[1.05rem] leading-relaxed">
                      ${contentLines.map(line => `<p class="m-0">${formatLinks(line)}</p>`).join('')}
                    </div>
                  </div>
                </div>
              </div>
            `;
          }

          const isHeading =
            plainText.length > 0 &&
            plainText.length < 100 &&
            !trimmed.includes("\n") &&
            !/[.!?:]$/.test(plainText);
            
          if (isHeading) return `<h2>${trimmed}</h2>`;
          
          // Bold standalone subheadings that use single newlines
          let lines = trimmed.split('\n');
          lines = lines.map(line => {
             const linePlain = line.trim().replace(/<[^>]*>/g, "");
             let processedLine = line.trim();
             
             // If a line is short and doesn't end in punctuation, bold it
             if (linePlain.length > 0 && linePlain.length < 80 && !/[.!?]$/.test(linePlain) && !processedLine.includes("<strong>")) {
                processedLine = `<strong>${processedLine}</strong>`;
             }
             
             // Convert plain URLs to clickable links
             if (!processedLine.includes('<a ')) {
               processedLine = processedLine.replace(
                 /(https?:\/\/[^\s<]+)/g, 
                 '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
               );
             }
             
             return processedLine;
          });
          
          return `<p>${lines.join("<br/>")}</p>`;
        })
        .join("");
    }
 
    // Inject a styled "Introduction" label after the first image / figure block
    const introLabel = `<div class="intro-label">
<span class="intro-tag">Introduction</span>
</div>`;
 
    // Try to insert after </figure>, </img>, or a standalone <img …> tag
    if (/<\/figure>/i.test(html)) {
      html = html.replace(/<\/figure>/, `</figure>${introLabel}`);
    } else if (/<img\b[^>]*>/i.test(html)) {
      html = html.replace(/(<img\b[^>]*>)/, `$1${introLabel}`);
    }
 
    // GLOBALLY ensure ALL <a> tags open in a new tab
    html = html.replace(/<a\b([^>]*)>/gi, (match, attrs) => {
      let newAttrs = attrs;
      if (!/target=/i.test(newAttrs)) {
        newAttrs += ' target="_blank"';
      }
      if (!/rel=/i.test(newAttrs)) {
        newAttrs += ' rel="noopener noreferrer"';
      }
      return `<a${newAttrs}>`;
    });

    return html;
  };
 
  if (loading) {
    return (
<>
<Navbar />
<main className="min-h-screen bg-background pt-32 pb-24">
<div className="container mx-auto px-4 sm:px-6 lg:px-12">
<Skeleton className="h-8 w-32 mb-8" />
<Skeleton className="h-96 w-full rounded-2xl mb-12" />
<div className="grid gap-8 lg:grid-cols-[280px_1fr]">
<Skeleton className="h-[400px] w-full rounded-lg" />
<div className="space-y-4">
<Skeleton className="h-6 w-full" />
<Skeleton className="h-6 w-full" />
<Skeleton className="h-6 w-3/4" />
</div>
</div>
</div>
</main>
<Footer />
</>
    );
  }
 
  if (notFound || !post) {
    return (
<>
<SEOHead
          title="Post Not Found | Cybaem Tech Blog"
          description="The blog post you're looking for could not be found."
          canonical={`/blog/${slug}`}
        />
<Navbar />
<main className="min-h-screen bg-background pt-32 pb-24">
<div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
<h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Post Not Found
</h1>
<p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist or has been
              removed.
</p>
<Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline"
>
<ArrowLeft size={16} />
              Back to Blog
</Link>
</div>
</main>
<Footer />
</>
    );
  }
 
  const readingTime = getReadingTime(post.content);
  const displayDate = formatDate(post.published_at);
 
  return (
<>
<SEOHead
        title={`${post.title} | Cybaem Tech Blog`}
        description={
          post.excerpt || `Read ${post.title} on the Cybaem Tech blog.`
        }
        canonical={`/blog/${post.slug}`}
        ogImage={post.cover_image || undefined}
        ogType="article"
      />
 
      {/* Progress Bar */}
<motion.div className="fixed top-[72px] left-0 right-0 h-1 bg-slate-200 origin-left z-50 flex">
<motion.div
          className="h-full bg-primary"
          style={{ scaleX, width: "100%", transformOrigin: "left" }}
        />
</motion.div>
 
      <Navbar />
 
      <main className="min-h-screen bg-[#F8FAFC]">
        {/* HERO SECTION */}
<section className="pt-[88px] pb-6 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
          {/* Meta + title card */}
<motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-5 bg-white rounded-[20px] border border-slate-100 shadow-[0_4px_28px_rgba(15,76,255,0.08),0_1px_6px_rgba(0,0,0,0.05)] px-7 sm:px-10 py-7"
>
            {/* Category + meta */}
<div className="flex flex-wrap items-center gap-3 mb-4">
<Badge className="bg-primary text-white hover:bg-primary/90 font-semibold px-3 py-1 text-xs uppercase tracking-wider rounded-md shadow-sm">
                {post.category || "IT Strategy"}
</Badge>
<div className="flex items-center gap-4 text-slate-400 text-sm font-medium">
<span className="flex items-center gap-1.5"><Clock size={13} /> {readingTime} min read</span>
<span className="flex items-center gap-1.5"><Calendar size={13} /> {displayDate || "Recently"}</span>
</div>
</div>
 
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.2] mb-3">
              {post.title}
</h1>
 
            {post.excerpt && (
<p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-3xl mb-5">
                {post.excerpt}
</p>
            )}
 
            {/* Author + actions */}
<div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden shrink-0">
<img src="/images/cybaem-logo.png" alt="Cybaem Tech" className="w-6 h-6 object-contain" />
</div>
<div>
<p className="text-slate-800 font-semibold text-sm leading-tight">{post.author || "Cybaem Tech Editorial Team"}</p>
<p className="text-slate-400 text-xs">Enterprise IT & Digital Transformation Experts</p>
</div>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-2">
  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">Share</span>
  <button 
    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
    className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1877F2]/5 text-[#1877F2] hover:bg-[#1877F2]/15 transition-colors border border-[#1877F2]/20 shadow-sm"
    title="Share on Facebook"
  >
    <Facebook size={14} />
  </button>
  <button 
    onClick={() => window.open(`https://www.instagram.com/`, '_blank')}
    className="w-8 h-8 rounded-full flex items-center justify-center bg-[#E1306C]/5 text-[#E1306C] hover:bg-[#E1306C]/15 transition-colors border border-[#E1306C]/20 shadow-sm"
    title="Share on Instagram"
  >
    <Instagram size={14} />
  </button>
  <button 
    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
    className="w-8 h-8 rounded-full flex items-center justify-center bg-[#0A66C2]/5 text-[#0A66C2] hover:bg-[#0A66C2]/15 transition-colors border border-[#0A66C2]/20 shadow-sm"
    title="Share on LinkedIn"
  >
    <Linkedin size={14} />
  </button>
  <button 
    onClick={() => {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    }}
    className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors border border-slate-200 shadow-sm"
    title="Copy Link"
  >
    <Copy size={14} />
  </button>
</div>
<button 
  onClick={toggleBookmark}
  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
    isBookmarked 
      ? "bg-amber-50 text-amber-600 border border-amber-200" 
      : "bg-slate-100 hover:bg-slate-200 text-slate-600 border border-transparent"
  }`}
>
  <Bookmark size={13} className={isBookmarked ? "fill-amber-600" : ""} /> 
  {isBookmarked ? "Bookmarked" : "Bookmark"}
</button>
</div>
</div>
</motion.div>
</section>
 
        {/* CONTENT LAYOUT */}
<section className="px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto pb-[120px] grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
          {/* SIDEBAR */}
<aside className="space-y-8 lg:sticky lg:top-[112px] hidden lg:block">
            {/* On This Page */}
            {headings.length > 0 ? (
<div className="bg-white/90 backdrop-blur-xl rounded-[24px] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/80 relative overflow-hidden">
{/* Decorative top gradient */}
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-sky-400 opacity-90" />
<div className="flex items-center gap-2 mb-6">
  <List size={16} className="text-primary" />
  <h3 className="font-display font-bold text-slate-900 uppercase tracking-wider text-xs">On This Page</h3>
</div>
<ul className="relative space-y-1 text-sm max-h-[60vh] overflow-y-auto pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
  {/* Vertical line behind items */}
  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-100 -z-10" />
  {headings.map((heading, i) => (
    <li
      key={heading.id}
      className={`group relative flex items-start gap-4 py-2 ${heading.level === 3 ? "ml-5" : ""}`}
    >
      {/* Active state indicator dot or subtle highlight */}
      <div className="absolute left-[5px] top-[14px] w-[5px] h-[5px] rounded-full bg-slate-200 group-hover:bg-primary transition-colors shadow-sm" />
      
      <span className="text-primary/50 text-[10px] font-bold w-4 shrink-0 font-mono mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
        {String(i + 1).padStart(2, "0")}
      </span>
      <a
        href={`#${heading.id}`}
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById(heading.id)
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
        }}
        className="text-slate-500 hover:text-slate-900 font-medium transition-colors leading-snug transform group-hover:translate-x-0.5 duration-200"
      >
        {heading.text}
      </a>
    </li>
  ))}
</ul>
<div className="mt-8 pt-6 border-t border-slate-100/80">
  <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-3">
    <span>Article Progress</span>
    <span className="text-primary">{progress}%</span>
  </div>
  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
    <div className="h-full bg-gradient-to-r from-primary to-sky-400 transition-all duration-300 rounded-full" style={{ width: `${progress}%` }} />
  </div>
</div>
</div>
            ) : (
<div className="bg-white/90 backdrop-blur-xl rounded-[24px] p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/80 relative overflow-hidden opacity-80">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-200 to-slate-300" />
<div className="flex items-center gap-2 mb-6">
  <List size={16} className="text-slate-400" />
  <h3 className="font-display font-bold text-slate-900 uppercase tracking-wider text-xs">On This Page</h3>
</div>
<p className="text-sm text-slate-500">
  Add headers (H2, H3) to your Google Sheet content to generate navigation.
</p>
<div className="mt-8 pt-6 border-t border-slate-100/80">
  <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-3">
    <span>Article Progress</span>
    <span className="text-slate-400">{progress}%</span>
  </div>
  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
    <div className="h-full bg-slate-300 transition-all duration-300 rounded-full" style={{ width: `${progress}%` }} />
  </div>
</div>
</div>
            )}
</aside>
 
          {/* MAIN CONTENT — styled card */}
<article className="min-w-0 bg-white rounded-[24px] border border-slate-100 shadow-[0_0_0_1px_rgba(15,76,255,0.06),0_8px_40px_rgba(15,76,255,0.1),0_2px_8px_rgba(0,0,0,0.06)] px-8 sm:px-12 py-10">
            {/* Real HTML Content from Google Sheets */}
<div
              id="blog-content-container"
              className="
                prose prose-lg max-w-[80ch] mx-auto
                prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                prose-h2:text-3xl sm:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b-2 prose-h2:border-primary/10 prose-h2:leading-tight
                prose-h3:text-2xl sm:prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-slate-800 prose-h3:leading-snug
                prose-p:text-slate-600 prose-p:leading-loose prose-p:mb-8 prose-p:mt-0 prose-p:text-[1.1rem] sm:prose-p:text-[1.15rem] prose-p:tracking-wide
                prose-a:text-primary prose-a:font-semibold prose-a:no-underline hover:prose-a:underline hover:prose-a:text-primary/80 transition-colors
                prose-strong:text-slate-900 prose-strong:font-bold prose-strong:bg-primary/5 prose-strong:px-1.5 prose-strong:py-0.5 prose-strong:rounded-md prose-strong:border-b prose-strong:border-primary/20
                prose-li:text-slate-600 prose-li:leading-relaxed prose-li:my-3 prose-li:text-[1.1rem] sm:prose-li:text-[1.15rem]
                prose-ul:mt-6 prose-ul:mb-8 prose-ul:list-none [&>ul>li]:relative [&>ul>li]:pl-8 [&>ul>li::before]:content-[''] [&>ul>li::before]:absolute [&>ul>li::before]:left-2 [&>ul>li::before]:top-[14px] [&>ul>li::before]:w-2 [&>ul>li::before]:h-2 [&>ul>li::before]:bg-primary [&>ul>li::before]:rounded-full [&>ul>li::before]:shadow-[0_0_8px_rgba(15,76,255,0.4)]
                prose-ol:mt-6 prose-ol:mb-8 prose-ol:list-decimal prose-ol:pl-6 prose-ol:marker:text-primary prose-ol:marker:font-bold
                prose-blockquote:not-italic prose-blockquote:border-l-4 prose-blockquote:border-primary
                prose-blockquote:bg-gradient-to-r prose-blockquote:from-primary/10 prose-blockquote:to-transparent prose-blockquote:rounded-r-2xl prose-blockquote:py-5 prose-blockquote:px-8
                prose-blockquote:text-slate-800 prose-blockquote:font-medium prose-blockquote:text-xl prose-blockquote:leading-relaxed prose-blockquote:shadow-sm
                [&_figure]:mx-auto [&_figure]:max-w-[85%] [&_figure]:block [&_figure]:my-12
                [&_.intro-label]:flex [&_.intro-label]:items-center [&_.intro-label]:gap-3 [&_.intro-label]:mt-10 [&_.intro-label]:mb-8
                [&_.intro-tag]:inline-flex [&_.intro-tag]:items-center [&_.intro-tag]:px-5 [&_.intro-tag]:py-2
                [&_.intro-tag]:bg-primary [&_.intro-tag]:text-white [&_.intro-tag]:text-xs
                [&_.intro-tag]:font-bold [&_.intro-tag]:uppercase [&_.intro-tag]:tracking-widest [&_.intro-tag]:rounded-full [&_.intro-tag]:shadow-md
                prose-img:mt-10 prose-img:mb-14 prose-img:max-h-[450px] prose-img:w-auto prose-img:max-w-full prose-img:mx-auto
                prose-img:rounded-[20px] prose-img:object-cover prose-img:block
                prose-img:shadow-[0_0_0_8px_rgba(255,255,255,1),0_20px_50px_-12px_rgba(0,0,0,0.15)]
                text-slate-800 selection:bg-primary/20 selection:text-primary
              "
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
</article>
</section>
<br />
<br />
        {/* BOTTOM SECTIONS */}
<section className="px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto pb-[120px] grid lg:grid-cols-[1fr_2fr] gap-16">
          {/* Author Block */}
<div className="bg-slate-50 rounded-[24px] p-8 border border-slate-100 flex flex-col sm:flex-row gap-6 items-start">
<div className="w-20 h-20 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 overflow-hidden">
<img
                src="/images/cybaem-logo.png"
                alt="Cybaem Tech"
                className="w-12 h-12 object-contain"
              />
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                About the Author
</p>
<h4 className="font-display text-xl font-bold text-slate-900 mb-1">
                Cybaem Tech Editorial Team
</h4>
<p className="text-sm text-slate-500 mb-4">
                Enterprise IT & Digital Transformation Experts
</p>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                We share insights on technology, IT solutions, digital
                transformation, and industry trends to help businesses grow and
                innovate.
</p>
<div className="flex items-center gap-3">
<a
  href="https://lnkd.in/dgvbSRmA"
  target="_blank"
  rel="noopener noreferrer"
  className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all flex items-center justify-center"
>
<Linkedin size={14} />
</a>
<a
  href="https://x.com/Cybaem_Tech"
  target="_blank"
  rel="noopener noreferrer"
  className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all flex items-center justify-center"
>
<Twitter size={14} />
</a>
<a
  href="https://cybaemtech.com"
  target="_blank"
  rel="noopener noreferrer"
  className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all flex items-center justify-center"
>
<Link2 size={14} />
</a>
</div>
</div>
</div>
 
          {/* Related Articles */}
<div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
<div className="flex items-center justify-between mb-8">
<h3 className="font-display text-xl font-bold text-slate-900">
                Related Articles
</h3>
<a
                href="/blog"
                className="text-sm font-semibold text-primary hover:text-blue-700 flex items-center gap-1.5"
>
                View All Articles <ArrowRight size={14} />
</a>
</div>
<div className="grid sm:grid-cols-3 gap-6">
              {relatedPosts.map((article, i) => (
<Link
                  to={`/blog/${article.slug}`}
                  key={article.id || i}
                  className="group cursor-pointer block"
>
<div className="w-full h-22 rounded-xl overflow-hidden mb-4 bg-slate-100">
<img
                      src={
                        article.cover_image || "/images/blog-placeholder.jpg"
                      }
                      alt={article.title}
                      className="w-full h-full shadow-2xl object-cover group-hover:scale-105 transition-transform duration-500"
                    />
</div>
<span className="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider mb-2">
                    {article.category || "IT Strategy"}
</span>
<h4 className="font-bold text-slate-900 text-sm leading-snug mb-2 group-hover:text-primary transition-colors">
                    {article.title}
</h4>
<p className="text-xs text-slate-500 flex items-center gap-1.5">
<Clock size={12} /> {getReadingTime(article.content)} min
                    read
</p>
</Link>
              ))}
</div>
</div>
</section>
</main>
<Footer />
</>
  );
};
 
export default BlogPost;
