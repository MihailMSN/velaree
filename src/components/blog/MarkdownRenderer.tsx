import { useMemo } from "react";
import CodeBlock from "./CodeBlock";

interface MarkdownRendererProps {
  content: string;
}

interface ContentBlock {
  type: "text" | "code";
  content: string;
  language?: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  const blocks = useMemo(() => {
    const result: ContentBlock[] = [];
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(content)) !== null) {
      // Add text before code block
      if (match.index > lastIndex) {
        result.push({
          type: "text",
          content: content.slice(lastIndex, match.index),
        });
      }

      // Add code block
      result.push({
        type: "code",
        content: match[2],
        language: match[1] || "javascript",
      });

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < content.length) {
      result.push({
        type: "text",
        content: content.slice(lastIndex),
      });
    }

    return result;
  }, [content]);

  const renderTextContent = (text: string) => {
    // Process markdown to HTML
    let html = text
      // Headings with IDs for TOC navigation
      .replace(/^## (.*$)/gm, (_, heading) => {
        const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        return `<h2 id="${id}" class="scroll-mt-28">${heading}</h2>`;
      })
      .replace(/^### (.*$)/gm, (_, heading) => {
        const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        return `<h3 id="${id}" class="scroll-mt-28">${heading}</h3>`;
      })
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      // Inline code
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      // Blockquotes
      .replace(/^> (.*$)/gm, "<blockquote>$1</blockquote>")
      // Tables
      .replace(/\|(.+)\|/g, (match) => {
        const cells = match.split("|").filter((c) => c.trim());
        if (cells.every((c) => /^[-:]+$/.test(c.trim()))) {
          return ""; // Skip separator row
        }
        return `<tr>${cells.map((c) => `<td>${c.trim()}</td>`).join("")}</tr>`;
      })
      // Lists - handle unordered lists
      .replace(/^- (.*$)/gm, "<li>$1</li>")
      // Numbered lists
      .replace(/^\d+\. (.*$)/gm, "<li>$1</li>")
      // Paragraphs - wrap consecutive text lines
      .split("\n\n")
      .map((para) => {
        para = para.trim();
        if (!para) return "";
        if (
          para.startsWith("<h") ||
          para.startsWith("<blockquote") ||
          para.startsWith("<li") ||
          para.startsWith("<tr") ||
          para.startsWith("<ul") ||
          para.startsWith("<ol") ||
          para.startsWith("<table")
        ) {
          // Wrap list items in ul
          if (para.includes("<li>") && !para.includes("<ul>") && !para.includes("<ol>")) {
            return `<ul>${para}</ul>`;
          }
          // Wrap table rows in table
          if (para.includes("<tr>") && !para.includes("<table>")) {
            return `<table class="w-full border-collapse my-4"><tbody>${para}</tbody></table>`;
          }
          return para;
        }
        return `<p>${para}</p>`;
      })
      .join("\n");

    return html;
  };

  return (
    <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:text-muted-foreground prose-blockquote:italic prose-blockquote:not-italic prose-li:text-muted-foreground prose-li:marker:text-primary prose-table:border prose-td:border prose-td:border-border prose-td:p-2 prose-td:text-sm">
      {blocks.map((block, index) => {
        if (block.type === "code") {
          return (
            <CodeBlock
              key={index}
              code={block.content}
              language={block.language}
            />
          );
        }
        return (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: renderTextContent(block.content) }}
          />
        );
      })}
    </article>
  );
};

export default MarkdownRenderer;