//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.7 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2018.12.18 at 11:12:53 PM EET 
//


package localhost._8080.computer;

import javax.xml.bind.annotation.*;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ComputerDetails" type="{http://localhost:8080/computer}ComputerDetails"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 *
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
        "computerDetails"
})
@XmlRootElement(name = "GetComputerDetailsResponse")
public class GetComputerDetailsResponse {

    @XmlElement(name = "ComputerDetails", required = true)
    protected ComputerDetails computerDetails;

    /**
     * Gets the value of the computerDetails property.
     *
     * @return
     *     possible object is
     *     {@link ComputerDetails }
     *     
     */
    public ComputerDetails getComputerDetails() {
        return computerDetails;
    }

    /**
     * Sets the value of the computerDetails property.
     *
     * @param value
     *     allowed object is
     *     {@link ComputerDetails }
     *     
     */
    public void setComputerDetails(ComputerDetails value) {
        this.computerDetails = value;
    }

}
