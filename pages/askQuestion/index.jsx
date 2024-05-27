import React, {useState, useEffect} from 'react'
import PageTemplate from '@/components/PageTemplate/PageTemplate'
import AskQuestionWrapper from '@/components/AskQuestionWrapper/AskQuestionWrapper'
import Alert from '@/components/Alert/Alert'
import cookies from 'js-cookie'
import axios from 'axios'



const AskQuestion = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.get(`${process.env.SERVER_URL}/user/me`, {
        headers,
      });
      setUser(response.data.user);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <PageTemplate>
        {user? <AskQuestionWrapper /> : <Alert text="Please login to post question"/>}
    </PageTemplate>
  )
}

export default AskQuestion