import { useResize } from "../../utils/hooks/useResize";
import Layout from "../../components/Layout/Layout";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import "./AboutUs.scss";
import { about } from "../../content/pagesContent/aboutPageContent.json";
import { title, description, keywords } from "../../content/metaInfo.json";
import teamPhoto from "../../assets/about/team.jpg";
import previewPhoto from "../../assets/socPreview/about.png";

function AboutUs() {
  const screenSize = useResize();
  return (
    <Layout
      title={title.about}
      description={description.about}
      keywords={keywords.about}
      page="about"
      ogImage={previewPhoto}
    >
      <section className="about">
        <h1 className={`title ${screenSize.trakResolutionValue}`}>О нас</h1>
        <BlockWithPhotoAndDesc
          photoLink={teamPhoto}
          size={screenSize.trakResolutionValue}
          caption=""
          newsTitle={about.title}
          newsText={about.description}
          position
        />
      </section>
    </Layout>
  );
}

export default AboutUs;
