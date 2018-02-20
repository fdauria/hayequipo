package org.arieled91.hayequipo.game.model.dto;

import org.arieled91.hayequipo.game.model.Game;
import org.arieled91.hayequipo.game.model.Location;
import org.arieled91.hayequipo.game.model.Player;

import java.time.LocalDateTime;
import java.util.Set;

public class GameResponse {
    private final Long id;

    private final String description;

    private final LocalDateTime dateTime;

    private final Location location;

    private final Set<Player> players;

    private final boolean currentUserJoined;

    public GameResponse(Game game, boolean currentUserJoined) {
        this.id = game.getId();
        this.dateTime = game.getDateTime();
        this.location = game.getLocation();
        this.players = game.getPlayers();
        this.description = game.getDescription();
        this.currentUserJoined = currentUserJoined;
    }

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public Location getLocation() {
        return location;
    }

    public Set<Player> getPlayers() {
        return players;
    }

    public boolean isCurrentUserJoined() {
        return currentUserJoined;
    }
}