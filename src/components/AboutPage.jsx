export default function AboutPage() {
  return (
    <>
      <div
        className="p-2 z-0 pt-24 relative"
        id="aboutPage"
        style={{ height: "100vh", width: "100vw" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/premium-photo/woman-meditating-park-with-view-city-background_941466-6294.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            opacity: 1,
            zIndex: -1,
          }}
        ></div>
        <h1 className="text-4xl text-white filter brightness-[1] relative">
          About Us
        </h1>
      </div>
    </>
  );
}
