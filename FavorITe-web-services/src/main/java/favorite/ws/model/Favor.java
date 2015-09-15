package favorite.ws.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Favor {

	@Id
	@GeneratedValue
	private Long favorId;
	private String favorName;
	private String favorDesc;
	private Date datePosted;
	private String compensation;
	private Date dateExpiring;
//	private Long posterId;
//	private Long acceptorId;

	public Long getFavorId() {
		return favorId;
	}
	
	public void setFavorId(Long favorId) {
		this.favorId = favorId;
	}
	
	public String getFavorName() {
		return favorName;
	}
	
	public void setFavorName(String favorName) {
		this.favorName = favorName;
	}
	
	public String getFavorDesc() {
		return favorDesc;
	}
	
	public void setFavorDesc(String favorDesc) {
		this.favorDesc = favorDesc;
	}
	
	public Date getDatePosted() {
		return datePosted;
	}
	
	public void setDatePosted(Date datePosted) {
		this.datePosted = datePosted;
	}
	
	public String getCompensation() {
		return compensation;
	}
	
	public void setCompensation(String compensation) {
		this.compensation = compensation;
	}
	
	public Date getDateExpiring() {
		return dateExpiring;
	}
	
	public void setDateExpiring(Date dateExpiring) {
		this.dateExpiring = dateExpiring;
	}
	
//	public Long getPosterId() {
//		return posterId;
//	}
//
//	public void setPosterId(Long posterId) {
//		this.posterId = posterId;
//	}
//
//	public Long getAcceptorId() {
//		return acceptorId;
//	}
//
//	public void setAcceptorId(Long acceptorId) {
//		this.acceptorId = acceptorId;
//	}
//	
}
