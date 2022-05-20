import React from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = React.useState('');
  const [results, setResults] = React.useState(null);
  const [searchOption, setsearchOption] = React.useState('shows')

  const isShowsSearch = (searchOption ==='shows')

  const onInputChange =(ev) =>{
    setInput(ev.target.value);
  }

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
}



  
  const onSearch = () => {
    
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
    setResults(result)
  });

}
  const renderResults = () => {
    if (results && results.length === 0) {
        return <div>No results try different names</div>
    }
    if (results && results.length > 0) {
      return results[0].show ? (<ShowGrid data ={results}  />
      ):<ActorGrid data ={results} />}
        
     
   
  }

  const onRadioChange = (ev) => {
    setsearchOption(ev.target.value);
  }
  console.log(searchOption)
  return (
    <>
      <MainPageLayout>
        <input
          type="text"
          placeholder="search for movies,shows,anime etc."
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          checked={isShowsSearch}
          value={input}
        />
        <div>
          <label htmlFor="shows-search">
            Shows
            <input
              id="shows-search"
              type="radio"
              onChange={onRadioChange}
              value="shows"
            ></input>
          </label>

          <label htmlFor="actors-search">
            Actors
            <input
              id="actors-search"
              type="radio"
              value="people"
              checked={!isShowsSearch}
              onChange={onRadioChange}
            ></input>
          </label>
        </div>
        <button type="button" onClick={onSearch}>
          search
        </button>
        {renderResults()}
      </MainPageLayout>
    </>
  );
};

export default Home;
