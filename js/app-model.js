const AppModel = {
  data: null,
  
  async load() {
    try {
      const response = await fetch('data/dynasty.json');
      this.data = await response.json();
      return this.data;
    } catch (e) {
      console.error('Failed to load dynasty data', e);
      return null;
    }
  },

  getNewsByCategory(category) {
    if (!this.data) return [];
    const stories = this.data.stories.filter(s => s.category === category);
    const headlines = this.data.headlines.filter(h => h.category === category);
    return [...stories, ...headlines];
  },

  getRankLookup(week) {
    const weekly = this.data.weeklyRankings.find(w => w.week === week) || this.data.weeklyRankings[0];
    return new Map(weekly.rankings.map(t => [t.team.toLowerCase(), t.rank]));
  },

  escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[char]);
  },

  renderTicker(container, games, rankLookup) {
    if (!container) return;
    container.innerHTML = games.map(game => `
      <div class="ticker-game">
        <div class="ticker-team"><span>${this.escapeHtml(game.away.team)}</span><span>${this.escapeHtml(game.away.score)}</span></div>
        <div class="ticker-team"><span>${this.escapeHtml(game.home.team)}</span><span>${this.escapeHtml(game.home.score)}</span></div>
        <div class="ticker-status">${this.escapeHtml(game.status)}</div>
      </div>
    `).join('');
  },

  renderPageNews(container, category) {
    if (!container) return;
    const news = this.getNewsByCategory(category);
    if (news.length === 0) {
      container.innerHTML = '<div class="score-info">No recent news for this category.</div>';
      return;
    }
    container.innerHTML = news.map(item => `
      <div class="headline-item">
        <div class="hl-dot">•</div>
        <div class="headline-text">${this.escapeHtml(item.title)}</div>
      </div>
    `).join('');
  }
};
