import NavLinkPage from "../NavLinkPage";
import Text from "../Text";

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

export default ContactCard;
