import React from 'react';
import './App.css';
import CSVTable from './Table/CSVTable';
import 'bulma/css/bulma.css'

const bibtexEntry = `
@article{park2021nerfies,
  author    = {Park, Keunhong and Sinha, Utkarsh and Barron, Jonathan T. and Bouaziz, Sofien and Goldman, Dan B and Seitz, Steven M. and Martin-Brualla, Ricardo},
  title     = {Nerfies: Deformable Neural Radiance Fields},
  journal   = {ICCV},
  year      = {2021},
}`;

const abstract = `Test set contamination, wherein test data from a benchmark ends up in a newer model’s training set, is a well-documented obstacle for fair LLM evaluation and can quickly render benchmarks obsolete.  As a consequence, LLM judging and benchmarks that crowdsource evaluations from their userbase and let human users judge the models’ responses are becoming popular.  While LLM judging and crowdsourced benchmarks have many benefits, LLM judges introduce significant bias, and crowdsourced benchmarks are uncontrolled since users have the freedom to ask whatever questions they want and judge model responses under their own subjective criteria.  In this work, we introduce LiveBench, designed to be immune to both test set contamination and the biases of LLM judging and crowdsourcing.  
LiveBench is the first benchmark that(1) contains frequently - updated questions from new information sources, and \emph{questions become harder over time }, (2) scores answers automatically according to the objective ground - truth, and(3) contains a wide variety of challenging questions, including math, coding, reasoning, and data science.LiveBench contains questions that are based on recently - released math competitions, arxiv papers, and datasets, and it contains harder, "un-gameable" versions of two previously released benchmarks: Big-Bench Hard and AMPS. 
We evaluate several closed-source models, as well as dozens of open-source models ranging from 7B to 70B in size. 
We release all questions, code, and model answers, and we welcome community engagement and collaboration for expanding the benchmark tasks and models.
Among many insights, we find that for the first time, GPT-4 is able to achieve a high enough score on the American Mathematics Competition (AMC12B 2023) to qualify for the American Invitational Mathematics Competition (AIME).`

function App() {
    return (
        <div className="App">
            <section class="hero">
                <div class="hero-body">
                    <div class="container is-max-desktop">
                        <div class="columns is-centered">
                            <div class="column has-text-centered">
                                <h1 class="title is-1 publication-title">LiveBench: This is a Subheader for the Project</h1>
                                <div class="is-size-5 publication-authors">
                                    <span class="author-block">
                                        <a href="https://crwhite.ml">Colin White*</a><sup>1</sup>,
                                        </span>
                                    <span class="author-block">
                                        <a href="http://spamueldooley.com">Samuel Dooley*</a><sup>1</sup>,
                                        </span>
                                    <br></br>
                                    <span class="author-block">
                                        <a href="https://willieneis.github.io">Willie Neiswanger</a><sup>2</sup>,
                                    </span>
                                    <span class="author-block">
                                        Sid<sup>4</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="https://www.ravid-shwartz-ziv.com">Ravid Shwartz-Ziv</a><sup>3</sup>,
                                    </span>
                                    <span class="author-block">
                                        Manley Roberts<sup>1</sup>,
                                    </span>
                                    <span class="author-block">
                                        Ben Feuer<sup>3</sup>,
                                    </span>
                                    <span class="author-block">
                                        Arka Pal<sup>1</sup>,
                                    </span>
                                    <br></br>
                                    <span class="author-block">
                                        <a href="https://chinmayhegde.github.io">Chinmay Hegde</a><sup>3</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="https://goldblum.github.io">Micah Goldblum</a><sup>3</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="http://yann.lecun.com">Yann LeCun</a><sup>3,5</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="https://www.cs.umd.edu/~tomg/">Tom Goldstein</a><sup>6</sup>
                                    </span>

                                </div>

                                <div class="is-size-5 publication-authors">
                                    <span class="author-block"><sup>1</sup>Abacus.AI,</span>
                                    <span class="author-block"><sup>2</sup>USC,</span>
                                    <span class="author-block"><sup>3</sup>NYU,</span>
                                    <span class="author-block"><sup>4</sup>Nvidia,</span>
                                    <span class="author-block"><sup>5</sup>Meta,</span>
                                    <span class="author-block"><sup>6</sup>UMD</span>
                                </div>

                                <div class="column has-text-centered">
                                    <div class="publication-links">
                                        <span class="link-block">
                                            <a href=""
                                                class="external-link button is-normal is-rounded is-dark">
                                                <span class="icon">
                                                    <i class="ai ai-arxiv"></i>
                                                </span>
                                                <span>Paper</span>
                                            </a>
                                        </span>
                                        <span class="link-block">
                                            <a href=""
                                                class="external-link button is-normal is-rounded is-dark">
                                                <span class="icon">
                                                    <i class="fab fa-github"></i>
                                                </span>
                                                <span>Code</span>
                                            </a>
                                        </span>
                                        <span class="link-block">
                                            <a href=""
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
                            <span class="dnerf">LiveBench</span> is an iterative language model benchmark with 
                            data updates every month to address contamination.
                        </h2>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="container is-max-desktop">
                    <div class="columns is-centered has-text-centered">
                        <div class="column is-four-fifths">
                            <h2 class="title is-3">Abstract</h2>
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
            <section class="section">
                <div class="columns is-centered">
                    <div class="column is-four-fifths">
                        <h2 class="title is-3">Related Links</h2>

                        <div class="content has-text-justified">
                            <p>
                                There's a lot of excellent work that was introduced around the same time as ours.
                            </p>
                            <p>
                                <a href="https://arxiv.org/abs/2104.09125">Progressive Encoding for Neural Optimization</a> introduces an idea similar to our windowed position encoding for coarse-to-fine optimization.
                            </p>
                            <p>
                                <a href="https://www.albertpumarola.com/research/D-NeRF/index.html">D-NeRF</a> and <a href="https://gvv.mpi-inf.mpg.de/projects/nonrigid_nerf/">NR-NeRF</a>
                                both use deformation fields to model non-rigid scenes.
                            </p>
                            <p>
                                Some works model videos with a NeRF by directly modulating the density, such as <a href="https://video-nerf.github.io/">Video-NeRF</a>, <a href="https://www.cs.cornell.edu/~zl548/NSFF/">NSFF</a>, and <a href="https://neural-3d-video.github.io/">DyNeRF</a>
                            </p>
                            <p>
                                There are probably many more by the time you are reading this. Check out <a href="https://dellaert.github.io/NeRF/">Frank Dellart's survey on recent NeRF papers</a>, and <a href="https://github.com/yenchenlin/awesome-NeRF">Yen-Chen Lin's curated list of NeRF papers</a>.
                            </p>
                        </div>
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
                                Lorem Ipsum
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