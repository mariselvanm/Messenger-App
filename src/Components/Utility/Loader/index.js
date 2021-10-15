import ReactLoading from 'react-loading';
import './style.scss';

export default function Loader() {
    return(
        <div className="Loader-Container">
            <ReactLoading type="bars" color="#000" height={'10%'} width={'10%'} />
        </div>
    )
}