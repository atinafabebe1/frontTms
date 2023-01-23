const UserInformation = (props) => {
  return (
    <div>
      <img
        width="75%"
        height="75%"
        style={{ borderRadius: "50%", marginTop: "10px" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5taINn-ULi-Gw1l5g7VkiDfkzm6btlLN_zpw-RyeFwsuiQBxrU45vQuc8ySnQes48TZ4&usqp=CAU"
        alt="photo"
      />
      <p>{props.firstName + " " + props.lastName}</p>
    </div>
  );
};
export default UserInformation;
