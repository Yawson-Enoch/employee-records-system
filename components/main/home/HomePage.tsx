import { useState } from 'react';
import { HomePageWrapper, Test } from './HomePage.styles';

const HomePage = () => {
  const [color, setColor] = useState<string>('hotpink');
  // const [data, setData] = useState<IUserInfo[]>([]);
  // const [isLoading, setIsLoading] = useState(true);

  /* CSR */
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await fetch('/api/feedback');
  //       if (!response.ok) {
  //         console.log('Something Went Wrong: Possible Server Error');
  //       }
  //       const data: IUserInfoProp = await response.json();
  //       const { data: dataFromApi } = data;
  //       setData(dataFromApi);
  //     } catch (error: any) {
  //       console.log('Network Error', error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // if (isLoading) {
  //   return <p>Content Is Loading</p>;
  // }

  return (
    <HomePageWrapper>
      <h1>HomePage</h1>
      <Test
        addColor={color}
        onClick={() => {
          color === 'hotpink' ? setColor('royalblue') : setColor('hotpink');
        }}
      >
        CHANGE COLOR
      </Test>
    </HomePageWrapper>
  );
};

export default HomePage;
