import React from 'react';
import './App.css';
import CSVTable from './Table/CSVTable';
import 'bulma/css/bulma.css'
import { bibtexEntry, abstract, tagline } from './constants';

function App() {
    return (
        <div className="App">
            <section class="hero">
                <div class="hero-body">
                    <div class="container is-max-desktop">
                        <div class="columns is-centered">
                            <div class="column has-text-centered">
                                <h1 class="title is-1 publication-title">LiveBench: A Framework for Future-Proof LLM Benchmarks</h1>
                                <div class="is-size-5 publication-authors">
                                    <span class="author-block">
                                        <a href="https://crwhite.ml" target="_blank" rel="noreferrer">Colin White*</a><sup>1</sup>,
                                        </span>
                                    <span class="author-block">
                                        <a href="http://spamueldooley.com" target="_blank" rel="noreferrer">Samuel Dooley*</a><sup>1</sup>,
                                        </span>
                                    <br></br>
                                    <span class="author-block">
                                        <a href="" target="_blank" rel="noreferrer">Manley Roberts</a><sup>1</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="" target="_blank" rel="noreferrer">Arka Pal</a><sup>1</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="" target="_blank" rel="noreferrer">Ben Feuer</a><sup>2</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="https://tmfs10.github.io/" target="_blank" rel="noreferrer">Siddhartha Jain</a><sup>3</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="https://www.ravid-shwartz-ziv.com" target="_blank" rel="noreferrer">Ravid Shwartz-Ziv</a><sup>2</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="https://neelsjain.github.io" target="_blank" rel="noreferrer">Neel Jain</a><sup>4</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="https://khalidsaifullaah.github.io" target="_blank" rel="noreferrer">Khalid Saifullah</a><sup>4</sup>,
                                    </span>
                                    <br></br>
                                    <span class="author-block">
                                        <a href="" target="_blank" rel="noreferrer">Siddartha Naidu</a><sup>1</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="https://chinmayhegde.github.io">Chinmay Hegde</a><sup>2</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="http://yann.lecun.com">Yann LeCun</a><sup>2,5</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="https://www.cs.umd.edu/~tomg/">Tom Goldstein</a><sup>4</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="https://willieneis.github.io" target="_blank" rel="noreferrer">Willie Neiswanger</a><sup>6</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="https://goldblum.github.io">Micah Goldblum</a><sup>2</sup>.
                                    </span>

                                </div>

                                <div class="is-size-5 publication-authors">
                                    <span class="author-block"><sup>1</sup>Abacus.AI,</span>
                                    <span class="author-block"><sup>2</sup>NYU,</span>
                                    <span class="author-block"><sup>3</sup>NVIDIA,</span>
                                    <span class="author-block"><sup>4</sup>UMD,</span>
                                    <span class="author-block"><sup>5</sup>Meta,</span>
                                    <span class="author-block"><sup>6</sup>USC</span>
                                </div>

                                <div class="column has-text-centered">
                                    <div class="publication-links">
                                        <span class="link-block">
                                            <a href="./"
                                                class="external-link button is-normal is-rounded is-dark">
                                                <span class="icon">
                                                    <i class="fab fa-images"></i>
                                                </span>
                                                <span>Leaderboard</span>
                                            </a>
                                            <a href="./blog"
                                                class="external-link button is-normal is-rounded is-dark">
                                                <span class="icon">
                                                    <i class="ai ai-arxiv"></i>
                                                </span>
                                                <span>Blog</span>
                                            </a>
                                        </span>
                                        <span class="link-block">
                                            <a href="./"
                                                class="external-link button is-normal is-rounded is-dark">
                                                <span class="icon">
                                                    <i class="fab fa-github"></i>
                                                </span>
                                                <span>Code</span>
                                            </a>
                                        </span>
                                        <span class="link-block">
                                            <a href="./"
                                                class="external-link button is-normal is-rounded is-dark">
                                                <span class="icon">
                                                    <i class="far fa-images"></i>
                                                </span>
                                                <span>Data</span>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="hero teaser">
                <div class="container is-max-desktop">
                    <div class="hero-body">
                        <h2 class="subtitle has-text-centered">
                            {tagline}
                        </h2>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="container is-max-desktop">
                    <div class="columns is-centered has-text-centered">
                        <div class="column is-four-fifths">
                            <h2 class="title is-3">Introduction</h2>
                            <div class="content has-text-justified">
                                {abstract}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="columns is-centered">
                    <div class="column is-four-fifths">
                        <h2 class="title is-3">Leaderboard</h2>
                            <CSVTable />
                    </div>
                </div>
            </section>

            <section class="section" id="BibTeX">
                <div class="container is-max-desktop content">
                    <h2 class="title">BibTeX</h2>
                    <pre class="bibtex"><code>{bibtexEntry}</code></pre>
                </div>
            </section>


            <footer class="footer">
                <div class="container">
                    <div class="content has-text-centered">
                    <a class="icon-link"
                        href="./static/videos/nerfies_paper.pdf">
                        <i class="fas fa-file-pdf"></i>
                    </a>
                    <a class="icon-link" href="https://github.com/keunhong" class="external-link" disabled>
                        <i class="fab fa-github"></i>
                    </a>
                    </div>
                    <div class="columns is-centered">
                    <div class="column is-8">
                        <div class="content">
                            <p>

                            </p>
                            <p>
                                This website is licensed under a <a rel="license"
                                                                    href="http://creativecommons.org/licenses/by-sa/4.0/">Creative
                                Commons Attribution-ShareAlike 4.0 International License</a>.
                                <br></br>The site was inspired by the <a
                                href="https://github.com/nerfies/nerfies.github.io">Nerfies project</a>.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}


export default App;