package org.coenraets.Museumsgude;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Bildtexte{
	
	private int id;
	private String text_zum_bild;
	
	public String getText() {
		return text_zum_bild;
	}
	public void setText(String text_zum_bild) {
		this.text_zum_bild = text_zum_bild;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
		
}
