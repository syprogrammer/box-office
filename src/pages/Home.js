import React from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = React.useState('');
  const [results, setResults] = React.useState(null);

  const onInputChange =(ev) =>{
    setInput(ev.target.value);
  }

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
}

  const onSearch = () => {
    
    apiGet(`/search/shows?q=${input}`).then(result => {
    setResults(result)
  });

}
  const renderResults = () => {
    if (results && results.length === 0) {
        return <div>No results try different names</div>
    }
    if (results && results.length > 0) {
      return (
        <div>
          {
            results.map((item) => (
              <div key={item.show.id}>{item.show.name}</div>
            ))
          }
        </div>
      );
    }
    return null;
  }
  return (
    <>
      <MainPageLayout>
        <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
       <button type='button' onClick={onSearch}>search</button>
       {renderResults()}
      </MainPageLayout>
    </>
  )
};

export default Home;
