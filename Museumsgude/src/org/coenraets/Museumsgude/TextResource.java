package org.coenraets.Museumsgude;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.coenraets.Museumsgude.Bildtexte;

@Path("/bildtexte")
public class TextResource {

	TextDAO dao = new TextDAO();
	
	/*@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public List<Bildtexte> findAll() {
		System.out.println("fin");
		return dao.findAll();
	}*/

	/*@GET @Path("search/{query}")
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public List<Bildtexte> findByName(@PathParam("query") String query) {
		System.out.println("findByName: " + query);
		return dao.findByName(query);
	}*/

	@GET @Path("{id}")
	@Produces({ MediaType.APPLICATION_JSON })
	public Bildtexte findById(@PathParam("id") String id) {
		return dao.retrieve(Integer.parseInt(id));
	}

	@POST
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON, })
	public Bildtexte create(Bildtexte b_text) {
		System.out.println("creating b_text");
		return dao.add(b_text);
	}

	@PUT @Path("{id}")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({ MediaType.APPLICATION_JSON })
	public Bildtexte update(Bildtexte b_text) {
		System.out.println("Updating text: " + b_text.getText());
		dao.update(b_text);
		return b_text;
	}
	
	@DELETE @Path("{id}")
	@Produces({ MediaType.APPLICATION_JSON })
	public void remove(@PathParam("id") int id) {
		dao.delete(id);
	}	
}
