import React from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
  const [input, setInput] = React.useState('');
  const onInputChange =(ev) =>{
    setInput(ev.target.value);
  }

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
}

  const onSearch = () => {
    // 
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(resolve => resolve.json()).then(result => {
      console.log(result);
    });
  }
  return (
    <>
      <MainPageLayout>
        <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
       <button type='button' onClick={onSearch}>search</button>
      </MainPageLayout>
    </>
  )
};

export default Home;
