import './App.css';

const ping_url  = 'http://localhost:8080/ping'
const hello_url = 'http://localhost:8080/hello'

const ApiClient = (props: any) => {
  const execApi = async (url: string) => {
    const response = await fetch((url));
    const json = await response.json();
    const message = await json[0]['message'];
    return props.getApiResponse(message);
  }

  return (
    <div>
      <button onClick={() => execApi(ping_url)}>PingAPIを呼ぶ</button>
      <button onClick={() => execApi(hello_url)}>HelloAPIを呼ぶ</button>
    </div>
  )
};

export default ApiClient