import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAlbums, loadAlbum } from './actions';
import Album from './Album';
import './styles/albums.css';

export class Albums extends Component {

  componentDidMount() {
    this.handleLoad();
  }
  
  handleLoad = () => {
    this.props.loadAlbums();
  }

  handleAlbum = ({ target }) => {
    const id = target.key;
    console.log(id);
    // this.props.loadAlbum(id);

  }

  render() {
    const { albums } = this.props;
    return (
      <div>
        <ul className="albumList">
          {albums.map(album => {
            return <li key={album.id} onClick={this.handleAlbum}>{album.name}</li>;
          })}
        </ul>
        <Album/>
      </div>
    );
  }
}

export default connect(
  state => ({ albums: state.albums }),
  { loadAlbums, loadAlbum }
)(Albums);