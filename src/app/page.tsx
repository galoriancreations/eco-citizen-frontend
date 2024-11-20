"use client";

export default function HomePage() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/images/AI1.jpg')" }}
    >
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-10 lg:px-8">
        <div className="relative mx-auto max-w-4xl bg-white bg-opacity-90 p-10 rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 sm:text-7xl">
              Welcome to Ting Global’s Eco Citizen Academy
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
              Nurturing the Next Generation of Leaders with AI Enhanced Training.
              Discover how our personalised, immersive leadership program prepares
              you for the future.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/program"
                className="relative inline-block px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-md shadow-md overflow-hidden transition-transform transform hover:scale-105 active:scale-95 hover:shadow-lg"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-0 transition-opacity duration-300 hover:opacity-100"
                  aria-hidden="true"
                ></span>
                <span className="relative z-10 block">Discover Your Leadership Potential - Explore the Program</span>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Program Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center">Program Overview</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 text-center">
              At Eco Citizen Academy, we're redefining leadership training. Our unique
              program combines advanced AI technology with immersive simulations, tailored
              learning paths, and a commitment to evolved stewardship, sustainability, and
              thrivability. Get ready to unlock your potential and lead with wisdom in the
              digital age.
            </p>
          </div>
        </div>
      </section>

      {/* About Us: Our Mission and Vision */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center">About Us: Our Mission and Vision</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
              Ting Global Academy was founded with a vision to transform traditional
              leadership training. We believe that effective leadership in the 21st
              century benefits from an evolved approach—one that is personalised,
              enhanced by technology, and rooted in ethical, equitable, and sustainable
              decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Vision for Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">Vision for Leadership</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
              Our vision is to nurture leaders who are skilled in navigating technological
              and global challenges in addition to being committed to making positive,
              sustainable impacts in their organisations and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">Meet the Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
              Meet the innovative minds behind Ting Global Academy—a diverse team of
              educators, technologists, and thought leaders dedicated to nurturing the
              next generation of evolved stewards of our world. Co-founders include
              Ben Goertzel, David Hanson, and other evolutionary thought leaders,
              alongside the renowned Sophia Robot.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
