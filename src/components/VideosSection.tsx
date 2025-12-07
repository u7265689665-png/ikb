const VideosSection = () => {
  const videos = [
    "https://www.youtube.com/embed/S7R1-QlHfhE",
    "https://www.youtube.com/embed/5YVymnicCUg",
    "https://www.youtube.com/embed/eWbOTs-8blo",
  ];

  return (
    <section id="videos" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground">Vidéos du Club</h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-8xl mx-auto">
          {videos.map((url, index) => (
            <div
              key={index}
              className="w-full aspect-video  rounded-lg overflow-hidden shadow-card animate-fade-in"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <iframe
                src={url}
                title={`video-${index}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
