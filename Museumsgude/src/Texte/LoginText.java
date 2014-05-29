package Texte;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import Texte.Text;

public class LoginText {

	// Constants
	private static final String PERSISTENCE_UNIT_NAME = "common-entities";

	// Constructor
	public LoginText() {
		System.out.println("LoginText started");
	}

	// Variable - OUTER
	private String text = null;

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	// Buttons logic
	public static void main(String[] args) {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory(PERSISTENCE_UNIT_NAME);
		EntityManager em = emf.createEntityManager();
	
		em.getTransaction().begin();
		Text sc = new Text();
		sc.setText("khl");
		em.persist(sc);
		em.getTransaction().commit();
	}

}
