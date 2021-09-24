package com.hester.models;

import org.springframework.stereotype.Component;

@Component
public class Game {
	private String gameId;

	public Game() {
		super();
	}
	
	
	public String getGameId(){
		return gameId;
	}
	
	public Game(String gameId) {
		super();
		this.gameId = gameId;
	}
}
