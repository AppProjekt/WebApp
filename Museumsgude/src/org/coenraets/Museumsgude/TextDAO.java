package org.coenraets.Museumsgude;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Logger;

public class TextDAO {

	private static Logger logger = Logger.getLogger("Museumsgude");

	private static String DB_URI = "jdbc:postgresql://localhost:5432/postgres";
	private static String DB_LOGINID = "mediplatt";
	private static String DB_PASSWORD = "mediplatt";
	
	public Bildtexte retrieve(int id) {
		Bildtexte result = null;
		try {
			Class.forName("org.postgresql.Driver");
			java.sql.Connection connection = DriverManager.getConnection(DB_URI, DB_LOGINID, DB_PASSWORD);
			java.sql.Statement statement = connection.createStatement();
			ResultSet resultSet = statement.executeQuery("SELECT * FROM bildtexte WHERE id = " + id);
			if (resultSet.next()) {
				result = processRow(resultSet);
			}
			resultSet.close();
			statement.close();
			connection.close();
		} catch (Exception e) {
			logger.info(e.getMessage());
		}
		return result;
	}

	public Bildtexte update(Bildtexte text) {
		System.out.println("update");
		try {
			Class.forName("org.postgresql.Driver");
			java.sql.Connection connection = DriverManager.getConnection(DB_URI, DB_LOGINID, DB_PASSWORD);
			java.sql.PreparedStatement ps = connection.prepareStatement("UPDATE bildtexte SET text_zum_bild=? WHERE id=?");
			ps.setString(1, text.getText());
            ps.setInt(2, text.getId());
            ps.executeUpdate();
			
			ps.close();
			connection.close();
		} catch (Exception e) {
			logger.info(e.getMessage());
		}
		return text;
	}
	
	public Bildtexte add(Bildtexte b_text) {
		return null;
	}

	public void delete(int id) {
		
	}

	/*public List<Bildtexte> findAll() {
		List<Bildtexte> list = new ArrayList<Bildtexte>();
		try {
			Class.forName("org.postgresql.Driver");
			java.sql.Connection connection = DriverManager.getConnection(DB_URI, DB_LOGINID, DB_PASSWORD);
			java.sql.Statement statement = connection.createStatement();
			ResultSet resultSet = statement.executeQuery("SELECT * FROM bildtexte ORDER BY text_zum_bild");
			 while (resultSet.next()) {
				list.add(processRow(resultSet));
			}
			resultSet.close();
			statement.close();
			connection.close();
		} catch (Exception e) {
			logger.info(e.getMessage());
		}
		return list;
	}*/
	
	protected Bildtexte processRow(ResultSet resultSet) throws SQLException {
		Bildtexte text = new Bildtexte();
        text.setId(resultSet.getInt("id"));
        text.setText(resultSet.getString("text_zum_bild"));
        return text;
    }
	
}
