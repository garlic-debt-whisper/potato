import React from 'react';
import './Blog.css';
import CSVTable from './Table/CSVTable';
import 'bulma/css/bulma.css'
import { bibtexEntry, abstract, tagline } from './constants';


function Blog() {
    return (
        <div className="Blog">
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
                                        <a href="https://willieneis.github.io" target="_blank" rel="noreferrer">Willie Neiswanger</a><sup>2</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="https://tmfs10.github.io/" target="_blank" rel="noreferrer">Siddhartha Jain</a><sup>4</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="https://www.ravid-shwartz-ziv.com" target="_blank" rel="noreferrer">Ravid Shwartz-Ziv</a><sup>3</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="" target="_blank" rel="noreferrer">Ben Feuer</a><sup>3</sup>,
                                    </span>
                                    <span class="author-block">
                                        <a href="" target="_blank" rel="noreferrer">Arka Pal</a><sup>1</sup>,
                                    </span>
                                    <br></br>
                                    <span class="author-block">
                                        <a href="" target="_blank" rel="noreferrer">Siddartha Naidu</a><sup>3</sup>,
                                    </span>
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
                        <div className="has-text-centered">
                            <img src="livebench_radar.png" alt="Radial Plot Visualization" style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
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
                                <br/><br/>
                                We introduce LiveBench, an open-source benchmark designed to be immune to both test set contamination and the pitfalls of LLM judging and crowdsourcing. LiveBench is the first benchmark with the following properties. 
                                <ul>
                                    <li>
                                        Contains frequently-updated questions from new information sources, and <strong>questions become harder over time</strong>.
                                    </li>
                                    <li>
                                        Scores answers automatically according to the objective ground-truth, without the use of LLM judges.
                                    </li>
                                    <li>
                                        Contains a wide variety of challenging questions, including math, coding, reasoning, and data analysis. 
                                    </li>
                                </ul>
                                LiveBench contains questions that are based on recently-released math competitions, arxiv papers, and datasets, and it contains harder, `un-gameable' versions of tasks from two previously released benchmarks: Big-Bench Hard and AMPS. We evaluate several closed-source models, as well as dozens of open-source models ranging from 7B to 70B in size. LiveBench is **hard**, with GPT-4-Turbo achieving 45% accuracy.
                                We release all questions, code, and model answers, and we welcome community engagement and collaboration for expanding the benchmark tasks and models. <strong>Questions will be added and updated on a monthly basis, and we welcome community contributions.</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div class="container is-max-desktop">
                    <div class="columns is-centered has-text-centered">
                        <div class="column is-four-fifths">
                            <h2 class="title is-3">Benchmark Overview</h2>
                            <div class="content has-text-justified">
                                <ul>
                                    <li>
                                        Coding: generation, completion, and selection questions from recent sites such as Codeforces.
                                    </li>
                                    <li>
                                        Math: recent math competitions, as well as a harder, new version of AMPS dataset.
                                    </li>
                                    <li>
                                        Reasoning: harder, new versions of tasks from Big-Bench Hard and bAbi, as well as zebra puzzles.
                                    </li>
                                    <li>
                                        Data Analysis: questions using recent datasets on Kaggle: table reformatting, predicting which columns can join two tables, and column type annotation
                                    </li>
                                    <li>
                                        Writing: fixing typos, and answering questions, from recent arxiv papers.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div class="container is-max-desktop">
                    <div class="columns is-centered has-text-centered">
                        <div class="column is-four-fifths">
                            <h2 class="title is-3">Motivation</h2>
                            <div class="content has-text-justified">
                                Most modern LLMs include large swaths of the internet in their training data; if the LLM has seen the questions of a benchmark during training, its performance on that benchmark will be artificially inflated. For example, recent work shows that LLMs' performance on Codeforces plummets after the training data cutoff date of the LLM, and before the cutoff date, performance is highly correlated with the number of times the problem appears on GitHub. Similarly, a recent hand-crafted variant of the established math dataset, GSM8K, shows evidence that several models have overfitted to this benchmark.
                                <br></br><br></br>

                                <strong>LLM-as-a-judge. </strong>
                                LLM judging is fast and relatively cheap. Furthermore, its biggest strength is its ability to judge open-ended questions, instruction-following questions, and chat bots.
                                On the other hand, LLM judging also comes with the following weaknesses.
                                LLMs have biases towards their own answers. 
                                Typically only GPT-4 and Claude-3-Opus are used as judges, as the highest-performing LLMs. 
                                Yet, GPT-4 and Claude-3-Opus both favor their own answers. 
                                They also have a noticeable difference in terms of variance and favorability of other models, and GPT-4 has variance in its own judging, even with temperature 0. 
                                Additionally, LLMs make errors. For example, question 2 in Arena-Hard asks to write a C++ program to compute whether a given string can be converted to `abc' by swapping two letters.
                                GPT-4 incorrectly judges gpt-4-0314's solution as incorrect.
                                <br></br><br></br>

                                <strong>Human-as-a-judge. </strong>
                                In some sense, human evaluation could be considered the gold standard for judging LLMs, because humans are the ones interfacing with LLMs in many applications.
                                However, human judging is still often not the best choice.
                                First, human-judging is quite labor-intensive, especially for certain types of questions such as complex math integrals, coding problems, or long-context reasoning problems. 
                                For these types of questions, it is common for humans to make mistakes, and it would be much simpler to have the answers upfront.
                                There can also be high variability from human to human. And finally, humans have biases such as the length of the output, the formatting, and the tone and formality.
                                <br></br><br></br>

                                <strong>Objective ground-truth judging. </strong>
                                Comparing the output of the LLM to a predetermined ground-truth answer (using exact-string matching and other techniques) comes with a number of strengths: it is trivial to score the outputs in terms of time and cost. Furthermore, it avoids the above weaknesses on having biases, errors, and variability in judging.
                                On the other hand, a weakness is that some types of questions do not have ground-truth answers, such as "write a travel guide to Hawaii."

                            </div>
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


export default Blog;