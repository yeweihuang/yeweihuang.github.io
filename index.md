---
layout: default
title: Yewei Huang
permalink: /
page_class: home
image: /assets/images/web/pinkboat-hero.jpg
---
<section class="hero wrap" aria-labelledby="hero-title">
  <div class="hero-copy">
    <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> Robotics · Perception · Autonomy</p>
    <h1 id="hero-title">Yewei<br>Huang</h1>
    <p class="hero-statement">Autonomous robots for<br><em>complex environments.</em></p>
    <p class="hero-description">I develop algorithms that help robots perceive, map, and explore the world—with a special focus on marine environments.</p>
    <div class="hero-profile">
      <p>Postdoctoral researcher<span>Computer Science · Dartmouth College</span></p>
    </div>
    <div class="hero-actions"><a class="button button-primary" href="#research">Explore my research <span aria-hidden="true">↓</span></a><a class="button button-text" href="{{ '/cv.html' | relative_url }}">View CV <span aria-hidden="true">↗</span></a><a class="button button-text" href="#contact">Contact <span aria-hidden="true">↗</span></a></div>
  </div>
  <figure class="hero-figure">
    <img src="{{ '/assets/images/web/pinkboat-hero.jpg' | relative_url }}" width="1200" height="1600" alt="Red surface robot moving across a lake in falling snow" fetchpriority="high">
    <figcaption><span class="eyebrow">From algorithms to the water</span><span>Surface robotics · Winter fieldwork</span><a href="#robots" aria-label="Explore the robot gallery">↘</a></figcaption>
  </figure>
</section>

<section id="about" class="about-section section wrap" aria-labelledby="about-title">
  <div class="about-profile">
    <h2 id="about-title" class="section-number">01 / ABOUT</h2>
    <figure class="about-portrait"><img src="{{ '/assets/images/web/yeweihuang.jpg' | relative_url }}" width="600" height="501" loading="lazy" alt="Yewei Huang smiling while kayaking"></figure>
  </div>
  <div class="about-copy">
    <p class="lead">My research connects autonomous perception, mapping, and decision-making with the challenges of deploying real robots.</p>
    <p>I am a postdoctoral researcher in the <a href="https://rlab.cs.dartmouth.edu/home/">Reality and Robotics Lab</a> at Dartmouth College, advised by Prof. <a href="https://rlab.cs.dartmouth.edu/albertoq/">Alberto Quattrini Li</a>. I received my Ph.D. in Mechanical Engineering from Stevens Institute of Technology, advised by Prof. <a href="https://robustfieldautonomylab.github.io/">Brendan Englot</a>.</p>
    <p>My training began at <strong>Tongji University</strong> in Shanghai, where I earned a master’s degree in Surveying Engineering and a bachelor’s degree in Geo-Information Systems. I was advised by Prof. Tiantian Fen and Prof. <a href="http://cs1.tongji.edu.cn/~junqiao/">Junqiao Zhao</a>.</p>
    <p>My goal is to enable autonomous robots to support underwater infrastructure maintenance and monitor offshore ecosystems. My interest in marine environments also comes with a love of sharks. My lifetime collaborator is <a href="https://www.pnnl.gov/people/yicheng-huang">Bear</a>.</p>
  </div>
  <aside class="highlights" aria-labelledby="highlights-title">
    <p class="eyebrow" id="highlights-title">Recent highlights</p>
    <div class="highlight"><span>2026 / RECOGNITION</span><p>Honorable Mention, inaugural IEEE RAS Women in Engineering Best PhD Award in Robotics and Automation.</p></div>
    <div class="highlight"><span>2025 / RECOGNITION</span><p>Maryland Robotics Center’s Future Leaders in Robotics and AI.</p></div>
    <a class="text-link" href="#awards">All awards &amp; honors <span aria-hidden="true">↗</span></a>
  </aside>
</section>

<section id="research" class="research-section section wrap" aria-labelledby="research-title">
  <div class="section-heading"><div><p class="section-number">02 / RESEARCH</p><h2 id="research-title">Perceive. Explore. Decide.</h2></div><p>How can robots work effectively under uncertainty and limited communication?</p></div>
  <div class="research-grid">
    <article class="research-card">
      <a class="research-image" href="https://arxiv.org/abs/2507.23629" aria-label="Read the DRACo-SLAM2 paper"><img src="{{ '/assets/images/web/DRACo-SLAM2.jpg' | relative_url }}" width="1149" height="1200" loading="lazy" alt="Object graph matching and sonar maps from DRACo-SLAM2"></a>
      <div class="research-body"><p class="eyebrow">01 / Multi-robot perception</p><h3>Mapping together.<br>Communicating less.</h3><p>DRACo-SLAM2 uses object graph matching to support distributed sonar SLAM with communication-efficient maps.</p><p class="venue">IROS 2025</p><div class="resource-links"><a href="https://arxiv.org/abs/2507.23629">Paper ↗</a><a href="https://github.com/RobustFieldAutonomyLab/DRACO-SLAM2">Code ↗</a><a href="https://robustfieldautonomylab.github.io/Huang_IROS_2025_Video.mp4">Video ↗</a></div></div>
    </article>
    <article class="research-card">
      <a class="research-image" href="https://arxiv.org/abs/2603.22667" aria-label="Read the variable-resolution virtual maps paper"><img src="{{ '/assets/images/web/large_scene.jpg' | relative_url }}" width="1400" height="1022" loading="lazy" alt="Variable-resolution mapping and exploration of a large offshore scene"></a>
      <div class="research-body"><p class="eyebrow">02 / Autonomous exploration</p><h3>Exploring with<br>uncertainty in mind.</h3><p>Variable-resolution virtual maps guide surface vehicles through uneven offshore environments while accounting for uncertainty.</p><p class="venue">Preprint · Under review</p><div class="resource-links"><a href="https://arxiv.org/abs/2603.22667">Paper ↗</a></div></div>
    </article>
    <article class="research-card">
      <a class="research-image" href="https://ieeexplore.ieee.org/document/10380691" aria-label="Read the mission-oriented Gaussian process motion planning paper"><img src="{{ '/assets/images/web/mgpmp.jpg' | relative_url }}" width="1200" height="951" loading="lazy" alt="Underwater motion planning over seafloor terrain and current flows"></a>
      <div class="research-body"><p class="eyebrow">03 / Planning &amp; decision-making</p><h3>Planning through<br>ocean currents.</h3><p>Mission-oriented Gaussian process motion planning accounts for complex seafloor terrain and current flows.</p><p class="venue">IEEE Robotics and Automation Letters · 2024</p><div class="resource-links"><a href="https://ieeexplore.ieee.org/document/10380691">Paper ↗</a><a href="https://github.com/RobustFieldAutonomyLab/Mission-Oriented-GP-Motion-Planning">Code ↗</a><a href="https://robustfieldautonomylab.github.io/Huang_RA-L_2024_Video.mp4">Video ↗</a></div></div>
    </article>
    <article class="research-card">
      <a class="research-image" href="https://arxiv.org/abs/2606.16881" aria-label="Read the SGM-SLAM paper"><img src="{{ '/assets/images/web/SGM-SLAM.jpg' | relative_url }}" width="1200" height="1070" loading="lazy" alt="Scene graph matching for distributed SLAM"></a>
      <div class="research-body"><p class="eyebrow">04 / Multi-robot perception</p><h3>SGM-SLAM</h3><p>Scene graph matching for data-efficient distributed SLAM, robust to viewpoint changes and occlusions.</p><p class="venue">SSRR 2026</p><div class="resource-links"><a href="https://arxiv.org/abs/2606.16881">Paper ↗</a></div></div>
    </article>
    <article class="research-card">
      <a class="research-image" href="https://arxiv.org/abs/2403.04021" aria-label="Read the multi-robot exploration paper"><img src="{{ '/assets/images/web/multi_em.jpg' | relative_url }}" width="1200" height="966" loading="lazy" alt="Multi-robot exploration under localization uncertainty"></a>
      <div class="research-body"><p class="eyebrow">05 / Autonomous exploration</p><h3>Multi-robot<br>exploration</h3><p>Balancing exploration efficiency and localization accuracy with expectation-maximization.</p><p class="venue">ICRA 2024</p><div class="resource-links"><a href="https://arxiv.org/abs/2403.04021">Paper ↗</a><a href="https://github.com/RobustFieldAutonomyLab/Multi-Robot-EM-Exploration">Code ↗</a><a href="https://robustfieldautonomylab.github.io/Huang_ICRA24_Video.mp4">Video ↗</a></div></div>
    </article>
    <article class="research-card">
      <a class="research-image" href="https://ieeexplore.ieee.org/document/9662965" aria-label="Read the DiSCo-SLAM paper"><img src="{{ '/assets/images/web/DiSCo-SLAM.jpg' | relative_url }}" width="1200" height="951" loading="lazy" alt="Distributed multi-robot LiDAR SLAM"></a>
      <div class="research-body"><p class="eyebrow">06 / Multi-robot perception</p><h3>DiSCo-SLAM</h3><p>Distributed scan context-enabled multi-robot LiDAR SLAM with global and local graph optimization.</p><p class="venue">IEEE Robotics and Automation Letters · 2022</p><div class="resource-links"><a href="https://ieeexplore.ieee.org/document/9662965">Paper ↗</a><a href="https://github.com/RobustFieldAutonomyLab/DiSCo-SLAM">Code ↗</a></div></div>
    </article>
  </div>
</section>

<section id="robots" class="field-section" aria-labelledby="robots-title">
  <div class="wrap section">
    <div class="section-heading"><div><p class="section-number">03 / IN THE FIELD</p><h2 id="robots-title">Robots beyond the screen.</h2></div><p>On the water, underwater, and on land—some of the platforms I have worked with.</p></div>
    <div class="robot-grid">
      <figure class="robot-photo robot-feature" id="daughter-boat"><a href="{{ '/assets/images/daughter_boat.jpg' | relative_url }}" aria-label="View full daughter boat photo"><img src="{{ '/assets/images/web/daughter_boat.jpg' | relative_url }}" width="900" height="1200" loading="lazy" alt="Daughter boat floating beside a rocky shoreline"></a><figcaption><span class="eyebrow">On the water</span><h3>Daughter Boat</h3></figcaption></figure>
      <figure class="robot-photo" id="blueboat"><a href="{{ '/assets/images/blueboat2.jpg' | relative_url }}" aria-label="View full BlueBoat photo"><img src="{{ '/assets/images/web/blueboat2.jpg' | relative_url }}" width="1000" height="750" loading="lazy" alt="Instrumented surface vehicle moving across the water"></a><figcaption><span class="eyebrow">Surface robotics</span><h3>Blue Robotics BlueBoat</h3></figcaption></figure>
      <figure class="robot-photo" id="bluerov"><a href="{{ '/assets/images/bluerov3.jpg' | relative_url }}" aria-label="View full BlueROV2 photo"><img src="{{ '/assets/images/web/bluerov3.jpg' | relative_url }}" width="1000" height="750" loading="lazy" alt="Blue Robotics BlueROV2 underwater robot"></a><figcaption><span class="eyebrow">Underwater robotics</span><h3>Blue Robotics BlueROV2</h3></figcaption></figure>
      <figure class="robot-photo" id="jackal"><a href="{{ '/assets/images/jackal2.jpg' | relative_url }}" aria-label="View full Jackal photo"><img src="{{ '/assets/images/web/jackal2.jpg' | relative_url }}" width="900" height="685" loading="lazy" alt="Clearpath Jackal ground robot"></a><figcaption><span class="eyebrow">Ground robotics</span><h3>Clearpath Jackal</h3></figcaption></figure>
      <figure class="robot-photo" id="go"><a href="{{ '/assets/images/unitree1.jpg' | relative_url }}" aria-label="View full Unitree photo"><img src="{{ '/assets/images/web/unitree1.jpg' | relative_url }}" width="900" height="675" loading="lazy" alt="Unitree Go2 quadruped robot"></a><figcaption><span class="eyebrow">Legged robotics</span><h3>Unitree Go2</h3></figcaption></figure>
    </div>
    <details class="field-details"><summary>More from the field <span aria-hidden="true">+</span></summary><div class="field-extra">
      <figure><a href="{{ '/assets/images/pinkboat.jpg' | relative_url }}"><img src="{{ '/assets/images/web/pinkboat.jpg' | relative_url }}" width="750" height="1000" loading="lazy" alt="Pink surface boat"></a><figcaption>Surface robotics</figcaption></figure>
      <figure><a href="{{ '/assets/images/bluerov5.jpg' | relative_url }}"><img src="{{ '/assets/images/web/bluerov5.jpg' | relative_url }}" width="750" height="1000" loading="lazy" alt="BlueROV2 field deployment"></a><figcaption>BlueROV2 in the field</figcaption></figure>
      <figure><a href="{{ '/assets/images/bluerov6.jpg' | relative_url }}"><img src="{{ '/assets/images/web/bluerov6.jpg' | relative_url }}" width="750" height="1000" loading="lazy" alt="Another view of a BlueROV2 field deployment"></a><figcaption>Underwater platforms</figcaption></figure>
      <figure><a href="{{ '/assets/images/jackal1.jpg' | relative_url }}"><img src="{{ '/assets/images/web/jackal1.jpg' | relative_url }}" width="900" height="900" loading="lazy" alt="Clearpath Jackal robot platform"></a><figcaption>Clearpath Jackal</figcaption></figure>
    </div></details>
  </div>
</section>

<section id="publications" class="section wrap selected-publications" aria-labelledby="publications-title">
  <div class="section-heading"><div><p class="section-number">04 / SELECTED PUBLICATIONS</p><h2 id="publications-title">A few recent contributions.</h2></div><a class="text-link" href="{{ '/publications/' | relative_url }}">Full publication list <span aria-hidden="true">↗</span></a></div>
  <ol class="selected-list">
    <li><span class="paper-year">2026</span><div><h3>SVIn+: Multi-Modal Framework for Robust Underwater State Estimation using 3D Sonar, Visual-Inertial, Water-Pressure, and DVL</h3><p>C. Burgul, X. Zhao, <strong>Y. Huang</strong>, M. Chatzispyrou, A. Quattrini Li, and I. Rekleitis</p><span class="venue">IEEE/RSJ International Conference on Intelligent Robots and Systems</span></div></li>
    <li><span class="paper-year">2026</span><div><h3><a href="https://arxiv.org/html/2510.18991v1">Underwater Dense Mapping with the First Compact 3D Sonar <span aria-hidden="true">↗</span></a></h3><p>C. Burgul, <strong>Y. Huang</strong>, M. Chatzispyrou, I. Rekleitis, A. Quattrini Li, and M. Xanthidis</p><span class="venue">IEEE International Conference on Robotics and Automation</span></div></li>
    <li><span class="paper-year">2025</span><div><h3><a href="https://arxiv.org/abs/2507.23629">DRACo-SLAM2: Distributed Robust Acoustic Communication-efficient SLAM for Imaging Sonar Equipped Underwater Robot Teams with Object Graph Matching <span aria-hidden="true">↗</span></a></h3><p><strong>Y. Huang</strong>, J. McConnell, X. Lin, and B. Englot</p><span class="venue">IEEE/RSJ International Conference on Intelligent Robots and Systems</span></div></li>
    <li><span class="paper-year">2024</span><div><h3><a href="https://arxiv.org/abs/2403.04021">Multi-Robot Autonomous Exploration and Mapping Under Localization Uncertainty with Expectation-Maximization <span aria-hidden="true">↗</span></a></h3><p><strong>Y. Huang</strong>, X. Lin, and B. Englot</p><span class="venue">IEEE International Conference on Robotics and Automation</span></div></li>
  </ol>
</section>

<section id="talks" class="talks-section section wrap" aria-labelledby="talks-title">
  <div class="section-heading"><div><p class="section-number">05 / TALKS</p><h2 id="talks-title">Talks &amp; presentations.</h2></div><p>Seminars, invited talks, and classroom presentations.</p></div>
  <ol class="talks-list">
    <li><time datetime="2026-09-30">Sep 30, 2026</time><div><p class="eyebrow">Virginia Tech · AOE 4984 Robot Perception</p><h3>Simultaneous Localization and Mapping (SLAM): From Robot Localization to Underwater Mapping</h3></div></li>
    <li><time datetime="2026-05-08">May 8, 2026</time><div><p class="eyebrow">Dartmouth College · COSC 81/281 Principles of Robot Design and Programming</p><h3>Machine Learning for Visual SLAM from Scene Representation Perspective</h3></div></li>
    <li><time datetime="2026-04-27">Apr 27, 2026</time><div><p class="eyebrow">Stevens Institute of Technology · ME 656 Autonomous Navigation for Mobile Robots</p><h3>Machine Learning for Visual SLAM from Scene Representation Perspective</h3></div></li>
    <li><time datetime="2026-02-13">Feb 13, 2026</time><div><p class="eyebrow">University of Connecticut · Environmental Engineering Seminar</p><h3>Reliable Navigation and Mapping in Uncertain Coastal Waters: Towards Trustworthy Marine Autonomy</h3></div></li>
    <li><time datetime="2025-07-11">Jul 11, 2025</time><div><p class="eyebrow">University College London · Invited talk (virtual)</p><h3>Distributed Robust Acoustic Communication-efficient SLAM for Imaging Sonar Equipped Underwater Robot Teams with Object Graph Matching</h3></div></li>
    <li><time datetime="2025-03-28">Mar 28, 2025</time><div><p class="eyebrow">Maryland Robotics Center · Future Leaders in Robotics and AI Seminar</p><h3>Data Efficient Localization and Mapping for Distributed Multi-Robot Teams in the Field</h3></div></li>
  </ol>
</section>

<section id="awards" class="awards-section section wrap" aria-labelledby="awards-title">
  <div class="section-label"><p class="section-number">06 / RECOGNITION</p><h2 id="awards-title">Awards &amp; honors.</h2></div>
  <ul class="awards-list">
    <li><span>2026</span><p>Honorable Mention, inaugural IEEE RAS Women in Engineering Best PhD Award in Robotics and Automation</p></li>
    <li><span>2025</span><p>Maryland Robotics Center: Future Leaders in Robotics and AI</p></li>
    <li><span>2024–25</span><p>Paul Kaplan Award for Distinguished Doctoral Work upon Graduation</p></li>
    <li><span>2024–25</span><p>Stevens Excellence Doctoral Fellowship</p></li>
    <li><span>2019–20</span><p>Stevens Provost Doctoral Fellowship</p></li>
  </ul>
</section>

<section id="contact" class="contact-section">
  <div class="wrap contact-inner">
    <div class="contact-intro">
      <div class="contact-portrait"><span class="contact-portrait-photo"><img src="{{ '/assets/images/web/yeweihuang.jpg' | relative_url }}" width="600" height="501" loading="lazy" alt="Yewei Huang smiling while kayaking"></span><span class="contact-wave" aria-hidden="true">👋</span></div>
      <div class="contact-copy"><p class="eyebrow">Get in touch</p><h2>Let’s talk robotics.</h2><p>For research conversations and collaboration.</p></div>
    </div>
    <a class="contact-link" href="mailto:{{ site.email }}">{{ site.email }} <span aria-hidden="true">↗</span></a>
  </div>
</section>
