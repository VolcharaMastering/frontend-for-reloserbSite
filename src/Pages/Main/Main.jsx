import { useResize } from "../../utils/hooks/useResize";
import "./Main.scss";

import videoFile from "../../assets/videos/video.mp4";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import photoLink from "../../assets/coworkPictures/DSC00025.jpg";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import BlockWithBlackBackground from "../../components/BlockWithBlackBackground/BlockWithBlackBackground";
import { main } from "../../content/mainTextBlock.json";
import { attantion } from "../../content/blackBlockText.json";
import generateRandomKey from "../../utils/keyGenerator";
import { titles } from "../../content/titles.json";
import { title, description } from "../../content/metaInfo.json";
import Layout from "../../components/Layout/Layout";

function Main() {
  const screenSize = useResize();
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  return (
    <Layout title={title.main} description={description.main}>
      <BackgroundVideo
        size={screenSize.trakResolutionValue}
        // videoLink="https://drive.google.com/file/d/1NuX2QWlMwbh-lUWxmNmOOQoa-PMlttfL/preview"
        videoLink={videoFile}
        videoTitle={titles.mainTitle}
      />
      <BlockWithBlackBackground
        title={attantion.title}
        description={attantion.description}
        text={attantion.textFeed}
      />
      {main.map((item, index) => (
        <BlockWithPhotoAndDesc
          key={getRandomKey}
          photoLink={photoLink}
          size={screenSize.trakResolutionValue}
          caption={item.newsCaption}
          newsTitle={item.newsTitle}
          newsText={item.newsText}
          position={index % 2 === 0}
        />
      ))}
    </Layout>
  );
}

export default Main;
