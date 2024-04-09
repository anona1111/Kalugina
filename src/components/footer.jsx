function Footer() {
    return (
       <footer className="page-footer  #4a148c purple darken-4">
          <div className="footer-copyright">
             <div className="container">
                by Daria Kalugina © {new Date().getFullYear()}
                <a className="grey-text text-lighten-4 right" href="#!">
                   Repository
                </a>
             </div>
          </div>
       </footer>
    );
 }
 export {Footer};