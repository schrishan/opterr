export default function OpterrHeroSection() {
  return (
    <>
      <section className="optcss-hero-section">
        <div className="holder holder-nogutter ">
          <div className="sq-12 lg:sq-6 vh100 lg:pos-relative t-center hero-img-wrp lg:d-flex">
            <img
              className="optcss-img"
              src="/images/home-img-1.svg"
              alt="optercss framework"
            />
          </div>
          <div className="sq-12 lg:sq-6 vh100 lg:pos-relative page-intro-wrp lg:d-flex">
            <div className="page-intro t-center">
              <h1>Perfect CSS utility suite</h1>
              <div className="intro p-1 md:ph-5 md:pt-2 md:pb-2">
                <span className="optcss pos-relative">
                  opterCSS<span className="beta-txt pos-absolute">Beta</span>
                </span>{" "}
                framework is a lightweight, responsive and mobile-first CSS
                utility suite to accompany any front-end framework and static
                web pages as well.
              </div>
              <div className="links-wrp">
                <a
                  href="/download/optercss.min.css"
                  download
                  rel="noreferrer"
                  className="btn download-link"
                >
                  Download
                </a>
                <a
                  href="https://github.com/schrishan/optercss-framework.git"
                  target="_blank"
                  rel="noreferrer"
                  className="btn github-link"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
