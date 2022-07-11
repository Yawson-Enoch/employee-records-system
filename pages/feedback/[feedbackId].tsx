import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IUserInfo } from '../../ts_ui';

interface IUserInfoApi {
  message: string;
  data: IUserInfo;
}

const feedBackId = () => {
  const [userId, setUserId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();
  const { feedbackId } = router.query;

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`/api/feedback/${feedbackId}`);
        if (!response.ok) {
          console.log('Something went wrong');
        }
        const { data }: IUserInfoApi = await response.json();
        setUserId(data?.id);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, []);

  if (loading) {
    <p style={{ textAlign: 'center' }}>Data Is Loading....Please Wait.</p>;
  }

  if (!userId) {
    <p style={{ textAlign: 'center' }}>No User Found</p>;
  }

  return <p style={{ textAlign: 'center' }}>{userId}</p>;
};

export default feedBackId;
