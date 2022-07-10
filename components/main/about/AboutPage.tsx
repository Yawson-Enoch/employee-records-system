import Image from 'next/image';
import { AboutPageWrapper } from './AboutPage.styles';

const AboutPage = () => {
  return (
    <AboutPageWrapper>
      <h1> AboutPage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
        maiores voluptas ipsa dolor nostrum natus, maxime totam dignissimos
        voluptatem voluptatibus laboriosam eum officiis autem deleniti est odio
        ipsam sunt. Delectus, ratione quaerat sint sed et praesentium hic earum
        quo ex ducimus nemo eius! Dignissimos, sequi molestiae amet voluptatibus
        nisi dolor unde animi obcaecati esse quos fugit omnis error temporibus
        repellat illum id facere vero commodi officiis maiores perspiciatis
        autem, quae praesentium. Neque reprehenderit nam consequuntur, similique
        velit ipsa assumenda nihil tempore! Ducimus blanditiis, reprehenderit
        sed aperiam maxime nemo nesciunt iure fuga qui sapiente quis aliquam
        sint. Dicta dolorem magni molestias aspernatur quod voluptatum saepe
        exercitationem adipisci modi cupiditate sed nemo, nisi sit laborum eos
        error rem similique? Qui, perferendis quia! Deserunt tenetur iusto odio
        sunt est repellat id illum repellendus provident distinctio consequuntur
        fugiat ad ab officia quidem numquam inventore voluptatibus animi
        dignissimos, porro ipsum ipsam! Adipisci ipsa culpa optio aliquam omnis
        sit vero aperiam quis quisquam. Asperiores quisquam, ratione vero
        voluptatum impedit praesentium atque placeat voluptas inventore pariatur
        beatae fugit nostrum cupiditate facilis ea molestiae blanditiis?
      </p>
      <div>
        <Image src='/images/tux.png' width={400} height={250} alt='bex image' />
      </div>
    </AboutPageWrapper>
  );
};

export default AboutPage;
