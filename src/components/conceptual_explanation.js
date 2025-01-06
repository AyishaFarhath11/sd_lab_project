// src/components/SetOperationsArticle.js

import React from 'react';
import './App.css'
const SetOperationsArticle = () => {
  return (
    <div className="set-operations-article">
      <h1>In This Article</h1>
      <ul>
        <li><a href="#what-are-set-operations">What Are Set Operations?</a></li>
        <li><a href="#set-operations-and-venn">Set Operations and Venn Diagrams</a></li>
        <li><a href="#four-set-operations">4 Set Operations</a></li>
        <li><a href="#properties-of-set-operations">Properties of Set Operations</a></li>
        <li><a href="#additional-terms">Additional Terms for Set Theory and Set Operations</a></li>
        <li><a href="#practice-set-operations">Practice Set Operations</a></li>
      </ul>

      {/* What Are Set Operations */}
      <section id="what-are-set-operations">
        <h2>What Are Set Operations?</h2>
        <p>Set operations describe the relationship between two or more sets. In math, a set is just a collection of objects. These objects (more commonly referred to as elements) can take many forms, such as:</p>
        <ul>
          <li>Numbers</li>
          <li>Letters</li>
          <li>Variables</li>
          <li>Points</li>
          <li>Shapes</li>
          <li>Symbols</li>
        </ul>
        <h3>Examples of Sets</h3>
        <p>The most common set operations are:</p>
        <ul>
          <li>Union</li>
          <li>Intersection</li>
          <li>Difference</li>
          <li>Complement</li>
        </ul>
      </section>

      {/* Set Operations and Venn Diagrams */}
      <section id="set-operations-and-venn">
        <h2>Set Operations and Venn Diagrams</h2>
        <p>We often represent set operations using Venn Diagrams. In a Venn Diagram, a circle represents each set. The relationship between sets is visually conveyed by the extent to which each circle overlaps with the other. The overlapping sections represent elements that exist in both sets.</p>
        <h3>Venn Diagrams</h3>
        <p>Venn diagrams provide a visual tool for understanding set operations, allowing for an intuitive grasp of the relationships between different sets.</p>
      </section>

      {/* 4 Set Operations */}
      <section id="four-set-operations">
        <h2>4 Set Operations</h2>

        {/* Union */}
        <div className="operation">
          <h3>1. Union (A ∪ B)</h3>
          <p>The union of two sets, A and B, is the set of distinct elements that are in Set A, Set B, or both A and B.</p>
          <p>In a Venn diagram, the union of Set A and Set B is represented by the area distinct to Set A, plus the area distinct to Set B, plus the overlapping portion belonging to both sets.</p>
          <p><strong>Example:</strong> If A = {'{1, 2, 3, 4, 5}'} and B = {'{3, 4, 5, 6}'}, 
          then A ∪ B = {'{1, 2, 3, 4, 5, 6}'}.</p>
        </div>

        {/* Intersection */}
        <div className="operation">
          <h3>2. Intersection (A ∩ B)</h3>
          <p>The intersection of two sets, A and B, is the set of elements that are in both Set A and Set B. In a Venn diagram, the intersection is the part where the two sets overlap.</p>
          <p><strong>Example:</strong>If A = {'{2, 4, 6, 8, 10}'} and B = {'{3, 6, 9, 12, 15}'}, 
          then A ∩ B = {'{6}'}.</p>
        </div>

        {/* Difference */}
        <div className="operation">
          <h3>3. Difference (A - B)</h3>
          <p>The difference of two sets, A-B, is the set of elements that are unique to Set A. In a Venn diagram, the difference of A and B is the area of circle A minus the part where the two sets overlap.</p>
          <p><strong>Example:</strong> If A = {'{4, 8, 12, 16, 20}'} and B = {'{4, 5, 16, 18, 20}'}, 
          then A - B = {'{8, 12}'}. </p>
        </div>

        {/* Complement */}
        <div className="operation">
          <h3>4. Complement</h3>
          <p>The complement of a set, often denoted by A’ or A<sup>c</sup>, refers to the elements in a universal set, Set U, that are not in Set A. A universal set is a set containing all given objects.</p>
          <p>The complement is the difference between the universal set and the set itself.</p>
        </div>
      </section>

      {/* Properties of Set Operations */}
      <section id="properties-of-set-operations">
        <h2>Properties of Set Operations</h2>
        <p>Just as basic math operations (+, -, ÷, ×) have specific properties, set operations also have distinct properties. Here are some of them:</p>

        <div className="property">
          <h3>1. Commutative Law</h3>
          <p>The commutative law for sets is similar to the commutative property of basic mathematical operations, such as addition and multiplication. Just as 3+4 = 4+3, the union (or intersection) of Set A and Set B is equal to the union (or intersection) of Set B and Set A.</p>
          <ul>
            <li>Commutative Law for Unions: A ∪ B = B ∪ A</li>
            <li>Commutative Law for Intersections: A ∩ B = B ∩ A</li>
          </ul>
        </div>

        <div className="property">
          <h3>2. Associative Law</h3>
          <p>The associative law for sets states that when finding the union or intersection of three sets, the grouping does not affect the result.</p>
          <ul>
            <li>Associative Law for Unions: A ∪ (B ∪ C) = (A ∪ B) ∪ C</li>
            <li>Associative Law for Intersections: A ∩ (B ∩ C) = (A ∩ B) ∩ C</li>
          </ul>
        </div>

        <div className="property">
          <h3>3. Distributive Law</h3>
          <p>The distributive law for unions and intersections expresses how sets interact when combined.</p>
          <ul>
            <li>Distributive Law for Unions: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)</li>
            <li>Distributive Law for Intersections: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</li>
          </ul>
        </div>

        <div className="property">
          <h3>4. DeMorgan’s Law</h3>
          <p>DeMorgan’s law has two parts:</p>
          <ul>
            <li>DeMorgan’s Law of Unions: (A ∪ B)<sup>c</sup> = A<sup>c</sup> ∩ B<sup>c</sup></li>
            <li>DeMorgan’s Law for Intersections: (A ∩ B)<sup>c</sup> = A<sup>c</sup> ∪ B<sup>c</sup></li>
          </ul>
        </div>

        <div className="property">
          <h3>5. Idempotent Property</h3>
          <p>The idempotent property states that the union of a set with itself is just equal to the set. Similarly, the intersection between a set and itself is equal to the set.</p>
          <ul>
            <li>A ∪ A = A</li>
            <li>A ∩ A = A</li>
          </ul>
        </div>
      </section>

      {/* Additional Terms for Set Theory and Set Operations */}
      <section id="additional-terms">
        <h2>Additional Terms for Set Theory and Set Operations</h2>
        <ul>
          <li>Empty Set - A set with no elements.</li>
          <li>Singleton - A set with only one element.</li>
          <li>Finite Set - A set with a countable number of elements.</li>
          <li>Infinite Set - A set with an unlimited number of elements.</li>
          <li>Common Elements - Elements in the intersection of two sets.</li>
          <li>Subsets - A set A is a subset of B if all elements in A are in B.</li>
          <li>Disjoint Sets - Two sets with no common elements.</li>
          <li>Symmetric Difference - Elements in A or B, but not in the intersection.</li>
        </ul>
      </section>

    
    </div>
  );
};

export default SetOperationsArticle;
