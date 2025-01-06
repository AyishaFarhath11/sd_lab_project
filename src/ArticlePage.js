// ArticlePage.js
import React from 'react';
import './ArticlePage.css';

function ArticlePage() {
  return (
    <div className="article-container">
      <header className="article-header">
        <h1>Set Operations with Examples</h1>
        <p className="article-subtitle">A guide to understanding union, intersection, and difference of sets</p>
      </header>

      <div className="article-content">
        <section className="article-section">
          <h2>Introduction</h2>
          <p>
            Set operations are fundamental in mathematics and are widely used in various fields. These operations
            allow us to compare and combine sets in meaningful ways. In this article, we will explore key set
            operations, including union, intersection, and difference.
          </p>
        </section>

        <section className="article-section">
          <h2>Union of Sets</h2>
          <p>
            The union of two sets is a set that contains all elements from both sets, without duplicates. The symbol
            for the union of two sets is ∪.
          </p>
          <div className="example-box">
            <p><strong>Example:</strong> If A = &#123;1, 2, 3&#125; and B = &#123;3, 4, 5&#125;, then A ∪ B = &#123;1, 2, 3, 4, 5&#125;</p>
          </div>
        </section>

        <section className="article-section">
          <h2>Intersection of Sets</h2>
          <p>
            The intersection of two sets is a set that contains only the elements that are present in both sets. The
            symbol for intersection is ∩.
          </p>
          <div className="example-box">
            <p><strong>Example:</strong> If A = &#123;1, 2, 3&#125; and B = &#123;3, 4, 5&#125;, then A ∩ B = &#123;3&#125;</p>
          </div>
        </section>

        <section className="article-section">
          <h2>Difference of Sets</h2>
          <p>
            The difference of two sets, A - B, contains elements that are in A but not in B.
          </p>
          <div className="example-box">
            <p><strong>Example:</strong> If A = &#123;1, 2, 3&#125; and B = &#123;3, 4, 5&#125;, then A - B = &#123;1, 2&#125;</p>
          </div>
        </section>

        <section className="article-section">
          <h2>Complement of a Set</h2>
          <p>
            The complement of a set A contains all elements not in A, within the universal set.
          </p>
          <div className="example-box">
            <p><strong>Example:</strong> If U = &#123;1, 2, 3, 4, 5&#125; and A = &#123;1, 2, 3&#125;, then A' = &#123;4, 5&#125;</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ArticlePage;
