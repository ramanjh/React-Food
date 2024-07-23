const Footer = () => { 
    const currYear = new Date().getFullYear();
    return (
      <footer className="Footer">

        <p className="p-4">
          Copyright &copy; {currYear}, Made with 💗 by <strong> JHA </strong>
      </p>
      </footer>
    );
  };
  
  export default Footer;