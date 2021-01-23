import React, { useEffect } from 'react';

import CharacterCard from '../CharacterCard';

import { characterEntries } from '../../redux/CharacterList/selectors';
import { nextUrl } from '../../redux/CharacterList/selectors';
import { fetchCharacterList } from '../../redux/CharacterList/actions';

import { connect } from 'react-redux';

import "./styles.scss";

const CharacterList = ({ characterListState, fetchCharacterList, nextUrlState }) => {

    useEffect(() => {
        fetchCharacterList();
    }, [fetchCharacterList]);

    const characterList = characterListState;
    const nextUrl = nextUrlState;

    return (
        <div className="app_container app_grid" >
            {characterList.map((tile, id) => (
                <CharacterCard character={tile} key={id}/>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => ({
    characterListState: characterEntries(state),
    nextUrlState: nextUrl(state)
});
  
  const mapDispatchToProps = (dispatch) => ({
    fetchCharacterList: () => dispatch(fetchCharacterList())
});

export default connect(mapStateToProps,mapDispatchToProps)(CharacterList);