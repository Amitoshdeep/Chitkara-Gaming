class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="nav">
        <h1 class="title">CHITKARA-GAMING<br></h1>    
            <ul>
                <li><a href="/index.html">HOME</a></li>
                <li><a href="/pages/contact us.html">CONTACT US</a></li>
                <li><a href="/pages/help.html">HELP</a></li>
            </ul>
        </div>
        `
        
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML  = `
        <div class="footer">
            <div class="top">
                <h3>Terms & Conditions</h3>
                <ol>
                    <li><h4>Refund Policy</h4></li>
                    <ul>
                        <!-- &nbsp;&nbsp;&nbsp;&nbsp; For tabs -->
                        <li><p>No refunds will be provided if the service/product does not meet your expectations due to personal preference, including but not limited to cases where you get bored or lose interest.</p></li>
                        <li><p>Refunds will be issued only in the event of errors or issues that are within our control and that we are unable to resolve to your satisfaction.</p></li>
                    </ul>
                    <li><h4>Payment Terms</h4></li>
                    <ul>
                        <li><p>No advance payment is required for our services. Payment is due only after the completion of the work, once the service/product has been delivered to your satisfaction.</p></li>
                        <li><p>We reserve the right to request partial payments for large projects upon prior agreement.</p></li>
                    </ul>
                    <li><h4>Limitation of Liability</h4></li>
                    <ul>
                        <li><p>While we strive for the highest quality of service, we cannot be held responsible for any outcomes or results that arise from external factors or unforeseen circumstances.</p></li>
                    </ul>
                </ol>
                <h3>By agreeing to our terms, you acknowledge that you understand and accept the above conditions.</h3>
            </div>
            
            <div class="bottom"><p>&copy;2024 Chitkara-Gaming | All Rights Resurved |</p></div>
        </div>
        `
    }
}

customElements.define('special-header',SpecialHeader)
customElements.define('special-footer',SpecialFooter)