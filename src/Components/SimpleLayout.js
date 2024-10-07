import React from "react";
import "../Styles/simpleLayout.css";

export const SimpleLayout = () => {
  return (
    <>
      <header>
        <h2>Simple Layout with HTML5</h2>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Profile</li>
          </ul>
        </nav>
      </header>

      <main className="flex-container">
        <aside className="flex-item">
          <h3>Advertise Here</h3>
          <ul>
            <li>ad one</li>
            <li>ad two</li>
          </ul>
        </aside>
        <div className="flex-item mainContent">
          <h1>Welcome to my Website</h1>
          <div className="flex-contain-div">
            <div className="flex-item-div">container1</div>
            <div className="flex-item-div">container2</div>
            <div className="flex-item-div">container3</div>
            <div className="flex-item-div">container4</div>
            <div className="flex-item-div">container4</div>
          </div>
          <div className="grid-contain-div">
            <div className="grid-item-div">container1</div>
            <div className="grid-item-div">container2</div>
            <div className="grid-item-div">container3</div>
            <div className="grid-item-div">container4</div>
            <div className="grid-item-div">container4</div>
          </div>
        </div>
        <section className="flex-item">
          <h2>Latest Articles</h2>
          <article>article 1</article>
          <article>article 2</article>
          <article>article 3</article>
        </section>
        <section className="flex-item">
          <h2>Latest Articles</h2>
          <article>article 1</article>
          <article>article 2</article>
          <article>article 3</article>
        </section>{" "}
        <section className="flex-item">
          <h2>Latest Articles</h2>
          <article>article 1</article>
          <article>article 2</article>
          <article>article 3</article>
        </section>{" "}
        <section className="flex-item">
          <h2>Latest Articles</h2>
          <article>article 1</article>
          <article>article 2</article>
          <article>article 3</article>
        </section>{" "}
        <section className="flex-item">
          <h2>Latest Articles</h2>
          <article>article 1</article>
          <article>article 2</article>
          <article>article 3</article>
        </section>{" "}
        <section className="flex-item">
          <h2>Latest Articles</h2>
          <article>article 1</article>
          <article>article 2</article>
          <article>article 3</article>
        </section>{" "}
        <section className="flex-item">
          <h2>Latest Articles</h2>
          <article>article 1</article>
          <article>article 2</article>
          <article>article 3</article>
        </section>
      </main>

      <div class="container">
        <div class="header">Header</div>
        <div class="sidebar-div">Sidebar</div>
        <div class="main">Main Content</div>
        <div class="extra">Extra Content</div>
        <div class="footer">Footer</div>
      </div>

      <footer>
        <ul>
          <li>Contact</li>
          <li>Terms and Conditions</li>
        </ul>{" "}
      </footer>
    </>
  );
};
