import LinkBtn from "../../../../../components/shared/LinkBtn/LinkBtn";

function HeroComp() {
  return (
    <>
      <div className="bg-slate-300">
        <div className="md:w-4/5 mx-auto px-8 md:px-0">
          <div className="md:w-2/5 py-16">
            <h2 className="text-5xl tracking-wide mb-5">Tees & Tops</h2>
            <p className="text-xs font-Edu-nsw mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              ab id eum labore ipsam nulla iusto dolores neque voluptatibus
              fugiat.
            </p>
            <LinkBtn to="">Discover more</LinkBtn>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroComp;
