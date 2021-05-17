import React from 'react';
import { Link } from "react-router-dom";
import confLogo from "../images/platziconf-logo.svg";
import Badge from '../components/Badge';
import "../components/styles/BadgeDetails.css";
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function useIncreasecount(max) {
  const [ count, setCount] = React.useState(0)

  if (count > max) {
    setCount(0)
  }
  return [count, setCount]
}


function BadgeDetails(props) {
  const [ count, setCount] = useIncreasecount(4)

  // const [ count, setCount] = React.useState(0)
  const badge = props.badge;


  return (
    <>
    <div className="BadgeDetails__hero">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={confLogo} alt="Logo de la coferencia"/>
          </div>
          <div className="col-6 BadgeDetails__hero-attendant-name">
            <h1>{badge.firstName} {badge.lastName}</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col">
        <Badge 
            firstName={badge.firstName || 'First Name'} 
            lastName={badge.lastName || 'Last Name'}
            email={badge.email || 'Email'}
            jobTitle={badge.jobTitle || 'Job Title'} 
            twitter={badge.twitter || 'Twitter'}
            avatarUrl="https://scontent.fmex10-1.fna.fbcdn.net/v/t1.0-1/p200x200/116807141_1417776975087739_3939471401626540445_o.jpg?_nc_cat=100&_nc_sid=7206a8&_nc_eui2=AeGwJlM9VYGSoZLMIE6ZvprGjAwNGpWbPe-MDA0alZs976oYsUmVHd1ZFI0uked6UPLtlSM5nnwEpsSKGDjSiPsG&_nc_ohc=5n9E8oar8NEAX_uxySk&_nc_ht=scontent.fmex10-1.fna&tp=6&oh=45cf7d432d6cf4a50401092c99ed5910&oe=5F81802D" 
          />
        </div>
        <div className="col">
          <h2>Actions</h2>
            <button onClick={() => {
              setCount(count + 1)}} 
              className="btn btn-primary mb-4">
              Contador: {count}
            </button>
          <div>
            <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link>
          </div>
          <div>
            <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
            <DeleteBadgeModal 
              isOpen={props.modalIsOpen}
              onClose={props.onCloseModal}
              onDeleteBadge={props.onDeleteBadge} 
            />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default BadgeDetails;
