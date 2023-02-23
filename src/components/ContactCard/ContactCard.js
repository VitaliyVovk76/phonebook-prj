import NavLinkPage from "../NavLinkPage";
import Text from "../Text";
import PropTypes from "prop-types";

const ContactCard = ({ name, number, id, location }) => {
  return (
    <>
      <Text text={`${name} : ${number}`} id="small" />
      <NavLinkPage
        to={`/contacts/${id}`}
        text="View"
        state={{ from: location, contactId: id }}
      />
    </>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

export default ContactCard;
