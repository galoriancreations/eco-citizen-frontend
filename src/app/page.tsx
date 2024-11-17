"use client";

export default function HomePage() {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/AI1.jpg')" }}>
      {/* Overlay כדי לשמור על קריאות */}
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative isolate px-6 pt-10 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-teal-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl py-15 sm:py-32 lg:py-40">
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
                  className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition"
                >
                  Discover Your Leadership Potential - Explore the Program
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Program Overview Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Program Overview</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              At Eco Citizen Academy, we're redefining leadership training. Our unique
              program combines advanced AI technology with immersive simulations, tailored
              learning paths, and a commitment to evolved stewardship, sustainability, and
              thrivability. Get ready to unlock your potential and lead with wisdom in the
              digital age.
            </p>
          </div>
        </section>

        {/* About Us: Our Mission and Vision */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">About Us: Our Mission and Vision</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Ting Global Academy was founded with a vision to transform traditional
              leadership training. We believe that effective leadership in the 21st
              century benefits from an evolved approach—one that is personalised,
              enhanced by technology, and rooted in ethical, equitable, and sustainable
              decision-making.
            </p>
          </div>
        </section>

        {/* Vision for Leadership */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Vision for Leadership</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Our vision is to nurture leaders who are skilled in navigating technological
              and global challenges in addition to being committed to making positive,
              sustainable impacts in their organisations and communities.
            </p>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Meet the innovative minds behind Ting Global Academy—a diverse team of
              educators, technologists, and thought leaders dedicated to nurturing the
              next generation of evolved stewards of our world. Co-founders include
              Ben Goertzel, David Hanson, and other evolutionary thought leaders,
              alongside the renowned Sophia Robot.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
