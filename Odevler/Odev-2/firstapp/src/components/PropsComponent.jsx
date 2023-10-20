import PropTypes from "prop-types";
const PropsComponent = ({ title, datas, selamlamaMesaji, myAge }) => {
  const nameAhmet = datas.filter((data) => data.name == "Ahmet");
  return (
    <div>
      <h2>Title: {title}</h2>
      <h3>{`${selamlamaMesaji} Benim Yaşım: ${myAge}`}</h3>
      {datas.map((data, index) => (
        <p
          key={index}
        >{`Kişinin adı: ${data.name}, soyadı: ${data.surName}`}</p>
      ))}

      <div>
        <p>Listede İsmi Ahmet olan {nameAhmet.length} kişi bulunmaktadır.</p>
      </div>
    </div>
  );
};

PropsComponent.propTypes = {
  title: PropTypes.string,
  datas: PropTypes.array,
  selamlamaMesaji: PropTypes.string,
  myAge: PropTypes.number,
};

export default PropsComponent;
