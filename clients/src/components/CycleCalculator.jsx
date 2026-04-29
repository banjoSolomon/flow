import React, { useState, useEffect } from 'react'
import '../styles/calculator.css'

const CycleCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState('')
  const [cycleLength, setCycleLength] = useState(28)
  const [periodLength, setPeriodLength] = useState(5)
  const [results, setResults] = useState(null)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [lutealPhase, setLutealPhase] = useState(14)
  const [irregularCycle, setIrregularCycle] = useState(false)
  const [cyclesToShow, setCyclesToShow] = useState(3)
  const [activeTab, setActiveTab] = useState('calendar')

  const calculateCycle = (e) => {
    e.preventDefault()
    
    if (!lastPeriodDate) {
      alert('Please enter your last period date')
      return
    }

    const startDate = new Date(lastPeriodDate)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    const cycles = []
    
    // Calculate multiple cycles
    for (let i = 0; i < cyclesToShow; i++) {
      const cycleStart = new Date(startDate)
      cycleStart.setDate(cycleStart.getDate() + (cycleLength * i))
      
      const nextPeriod = new Date(cycleStart)
      nextPeriod.setDate(nextPeriod.getDate() + cycleLength)
      
      // Use custom luteal phase if advanced mode
      const lutealLength = showAdvanced ? lutealPhase : 14
      const ovulationDay = new Date(nextPeriod)
      ovulationDay.setDate(ovulationDay.getDate() - lutealLength)
      
      // Fertile window
      const fertileStart = new Date(ovulationDay)
      fertileStart.setDate(fertileStart.getDate() - 5)
      const fertileEnd = new Date(ovulationDay)
      fertileEnd.setDate(fertileEnd.getDate() + 1)
      
      // Peak fertility
      const peakStart = new Date(ovulationDay)
      peakStart.setDate(peakStart.getDate() - 2)
      const peakEnd = new Date(ovulationDay)
      
      // Period end
      const periodEnd = new Date(nextPeriod)
      periodEnd.setDate(periodEnd.getDate() + periodLength - 1)
      
      // Days until
      const daysUntilOvulation = Math.ceil((ovulationDay - today) / (1000 * 60 * 60 * 24))
      const daysUntilPeriod = Math.ceil((nextPeriod - today) / (1000 * 60 * 60 * 24))
      
      // Current phase
      let currentPhase = ''
      let phaseDay = 0
      const daysSinceStart = Math.floor((today - cycleStart) / (1000 * 60 * 60 * 24))
      
      if (daysSinceStart >= 0 && daysSinceStart < cycleLength) {
        if (daysSinceStart < periodLength) {
          currentPhase = 'Menstrual'
          phaseDay = daysSinceStart + 1
        } else if (daysSinceStart < (cycleLength - lutealLength - 2)) {
          currentPhase = 'Follicular'
          phaseDay = daysSinceStart - periodLength + 1
        } else if (daysSinceStart >= (cycleLength - lutealLength - 2) && daysSinceStart <= (cycleLength - lutealLength + 1)) {
          currentPhase = 'Ovulation'
          phaseDay = daysSinceStart - (cycleLength - lutealLength - 2) + 1
        } else {
          currentPhase = 'Luteal'
          phaseDay = daysSinceStart - (cycleLength - lutealLength + 1) + 1
        }
      }
      
      cycles.push({
        cycleNumber: i + 1,
        periodStart: nextPeriod,
        periodEnd: periodEnd,
        ovulation: ovulationDay,
        fertileStart,
        fertileEnd,
        peakStart,
        peakEnd,
        daysUntilOvulation,
        daysUntilPeriod,
        currentPhase: i === 0 ? currentPhase : '',
        phaseDay: i === 0 ? phaseDay : 0,
        follicularLength: cycleLength - lutealLength,
        lutealLength
      })
    }
    
    setResults({ cycles, cycleLength, periodLength })
  }

  const resetCalculator = () => {
    setLastPeriodDate('')
    setCycleLength(28)
    setPeriodLength(5)
    setLutealPhase(14)
    setIrregularCycle(false)
    setResults(null)
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const formatDateShort = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const getPhaseColor = (phase) => {
    const colors = {
      'Menstrual': '#FF6B9D',
      'Follicular': '#FFB347',
      'Ovulation': '#9B59B6',
      'Luteal': '#3498DB'
    }
    return colors[phase] || '#999'
  }

  const generateCalendarDays = (cycle) => {
    const days = []
    const startDate = new Date(cycle.periodStart)
    startDate.setDate(startDate.getDate() - 7)
    
    for (let i = 0; i < 42; i++) {
      const currentDate = new Date(startDate)
      currentDate.setDate(startDate.getDate() + i)
      
      let type = 'normal'
      let label = ''
      
      if (currentDate >= cycle.periodStart && currentDate <= cycle.periodEnd) {
        type = 'period'
        label = 'Period'
      } else if (currentDate.toDateString() === cycle.ovulation.toDateString()) {
        type = 'ovulation'
        label = 'Ovulation'
      } else if (currentDate >= cycle.peakStart && currentDate <= cycle.peakEnd) {
        type = 'peak'
        label = 'Peak'
      } else if (currentDate >= cycle.fertileStart && currentDate <= cycle.fertileEnd) {
        type = 'fertile'
        label = 'Fertile'
      }
      
      const isToday = currentDate.toDateString() === new Date().toDateString()
      
      days.push({
        date: currentDate,
        day: currentDate.getDate(),
        type,
        label,
        isToday
      })
    }
    
    return days
  }

  return (
    <div className="calculator-container">
      <div className="calculator-header">
        <h2 className="calculator-title">🌸 Cycle Calculator</h2>
        <p className="calculator-subtitle">Track ovulation, peak fertility, and predict multiple cycles ahead</p>
      </div>

      <div className="how-to-use">
        <div className="how-to-header">
          <span className="info-icon">💡</span>
          <h3>How to Use This Calculator</h3>
        </div>
        <div className="how-to-steps">
          <div className="step">
            <span className="step-number">1</span>
            <div className="step-content">
              <strong>Enter your last period date</strong>
              <p>Select the first day your last period started (e.g., May 3, 2026)</p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <div className="step-content">
              <strong>Set your cycle length</strong>
              <p>Count days from the first day of one period to the first day of the next (typically 28 days)</p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <div className="step-content">
              <strong>Set your period length</strong>
              <p>How many days does your period usually last? (typically 5 days)</p>
            </div>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <div className="step-content">
              <strong>Click Calculate</strong>
              <p>Get predictions for ovulation, fertile window, and next periods</p>
            </div>
          </div>
        </div>
        <div className="example-box">
          <strong>📝 Example:</strong> If your last period started on April 1, 2026, your cycle is 28 days, and your period lasts 5 days:
          <ul>
            <li>Next period: April 29, 2026</li>
            <li>Ovulation: Around April 15, 2026</li>
            <li>Fertile window: April 10-16, 2026</li>
            <li>Peak fertility: April 13-15, 2026</li>
          </ul>
        </div>
      </div>

      <form className="calculator-form" onSubmit={calculateCycle}>
        <div className="form-group">
          <label htmlFor="lastPeriod">
            <span className="label-icon">📅</span>
            First day of your last period
            <span className="tooltip-icon" title="Select the date when your last period started, not when it ended">ⓘ</span>
          </label>
          <input
            type="date"
            id="lastPeriod"
            value={lastPeriodDate}
            onChange={(e) => setLastPeriodDate(e.target.value)}
            max={new Date().toISOString().split('T')[0]}
            required
          />
          <small className="help-text">📌 Example: If your period started on April 1st, select April 1st</small>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cycleLength">
              <span className="label-icon">🔄</span>
              Average cycle length (days)
              <span className="tooltip-icon" title="Count from day 1 of one period to day 1 of the next period">ⓘ</span>
            </label>
            <input
              type="number"
              id="cycleLength"
              value={cycleLength}
              onChange={(e) => setCycleLength(Number(e.target.value))}
              min="21"
              max="45"
              required
            />
            <small>Typical: 21-35 days • Most common: 28 days</small>
          </div>

          <div className="form-group">
            <label htmlFor="periodLength">
              <span className="label-icon">⏱️</span>
              Period length (days)
              <span className="tooltip-icon" title="How many days does your period bleeding last?">ⓘ</span>
            </label>
            <input
              type="number"
              id="periodLength"
              value={periodLength}
              onChange={(e) => setPeriodLength(Number(e.target.value))}
              min="2"
              max="10"
              required
            />
            <small>Typical: 3-7 days • Most common: 5 days</small>
          </div>
        </div>

        <div className="advanced-toggle">
          <button 
            type="button" 
            className="toggle-btn"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            {showAdvanced ? '▼' : '▶'} Advanced Options
          </button>
        </div>

        {showAdvanced && (
          <div className="advanced-options">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="lutealPhase">
                  <span className="label-icon">🌙</span>
                  Luteal phase length (days)
                </label>
                <input
                  type="number"
                  id="lutealPhase"
                  value={lutealPhase}
                  onChange={(e) => setLutealPhase(Number(e.target.value))}
                  min="10"
                  max="16"
                />
                <small>Days between ovulation and period (typically 12-14)</small>
              </div>

              <div className="form-group">
                <label htmlFor="cyclesToShow">
                  <span className="label-icon">📊</span>
                  Cycles to predict
                </label>
                <input
                  type="number"
                  id="cyclesToShow"
                  value={cyclesToShow}
                  onChange={(e) => setCyclesToShow(Number(e.target.value))}
                  min="1"
                  max="6"
                />
                <small>Number of future cycles (1-6)</small>
              </div>
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={irregularCycle}
                  onChange={(e) => setIrregularCycle(e.target.checked)}
                />
                <span>I have irregular cycles (±7 days variation)</span>
              </label>
            </div>
          </div>
        )}

        <div className="form-actions">
          <button type="submit" className="calculate-btn">
            Calculate My Cycles
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </button>
          {results && (
            <button type="button" className="reset-btn" onClick={resetCalculator}>
              Reset
            </button>
          )}
        </div>
      </form>

      {results && (
        <div className="results-container">
          <div className="results-header">
            <h3>Your Cycle Predictions</h3>
            <p>Based on your {results.cycleLength}-day cycle • Showing {results.cycles.length} cycle{results.cycles.length > 1 ? 's' : ''}</p>
          </div>

          {results.cycles[0].currentPhase && (
            <div className="current-phase-card">
              <div className="phase-indicator" style={{ background: getPhaseColor(results.cycles[0].currentPhase) }}>
                <div className="phase-icon">
                  {results.cycles[0].currentPhase === 'Menstrual' && '🩸'}
                  {results.cycles[0].currentPhase === 'Follicular' && '🌱'}
                  {results.cycles[0].currentPhase === 'Ovulation' && '🥚'}
                  {results.cycles[0].currentPhase === 'Luteal' && '🌙'}
                </div>
                <div className="phase-info">
                  <h4>Current Phase: {results.cycles[0].currentPhase}</h4>
                  <p>Day {results.cycles[0].phaseDay} of {results.cycles[0].currentPhase} phase</p>
                </div>
              </div>
              <div className="phase-timeline">
                <div className="timeline-bar">
                  <div className="timeline-segment menstrual" style={{ width: `${(results.periodLength / results.cycleLength) * 100}%` }}>
                    <span>Menstrual</span>
                  </div>
                  <div className="timeline-segment follicular" style={{ width: `${((results.cycles[0].follicularLength - results.periodLength) / results.cycleLength) * 100}%` }}>
                    <span>Follicular</span>
                  </div>
                  <div className="timeline-segment ovulation" style={{ width: `${(3 / results.cycleLength) * 100}%` }}>
                    <span>Ovulation</span>
                  </div>
                  <div className="timeline-segment luteal" style={{ width: `${(results.cycles[0].lutealLength / results.cycleLength) * 100}%` }}>
                    <span>Luteal</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="tabs-container">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'calendar' ? 'active' : ''}`}
                onClick={() => setActiveTab('calendar')}
              >
                📅 Calendar View
              </button>
              <button 
                className={`tab ${activeTab === 'list' ? 'active' : ''}`}
                onClick={() => setActiveTab('list')}
              >
                📋 List View
              </button>
              <button 
                className={`tab ${activeTab === 'timeline' ? 'active' : ''}`}
                onClick={() => setActiveTab('timeline')}
              >
                📊 Timeline
              </button>
            </div>
          </div>

          {activeTab === 'calendar' && (
            <div className="calendar-view">
              {results.cycles.map((cycle, idx) => (
                <div key={idx} className="cycle-calendar">
                  <h4 className="cycle-title">
                    Cycle {cycle.cycleNumber} - {formatDate(cycle.periodStart)}
                  </h4>
                  <div className="calendar-grid">
                    <div className="calendar-header">
                      <div>Sun</div>
                      <div>Mon</div>
                      <div>Tue</div>
                      <div>Wed</div>
                      <div>Thu</div>
                      <div>Fri</div>
                      <div>Sat</div>
                    </div>
                    <div className="calendar-days">
                      {generateCalendarDays(cycle).map((day, i) => (
                        <div 
                          key={i} 
                          className={`calendar-day ${day.type} ${day.isToday ? 'today' : ''}`}
                          title={day.label}
                        >
                          <span className="day-number">{day.day}</span>
                          {day.label && <span className="day-label">{day.label}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'list' && (
            <div className="list-view">
              {results.cycles.map((cycle, idx) => (
                <div key={idx} className="cycle-card">
                  <div className="cycle-header">
                    <h4>Cycle {cycle.cycleNumber}</h4>
                    {cycle.daysUntilPeriod > 0 && (
                      <span className="countdown-badge">{cycle.daysUntilPeriod} days away</span>
                    )}
                  </div>
                  
                  <div className="cycle-details">
                    <div className="detail-item period">
                      <div className="detail-icon">🩸</div>
                      <div className="detail-content">
                        <strong>Period</strong>
                        <p>{formatDateShort(cycle.periodStart)} - {formatDateShort(cycle.periodEnd)}</p>
                        <small>{results.periodLength} days</small>
                      </div>
                    </div>

                    <div className="detail-item fertile">
                      <div className="detail-icon">💚</div>
                      <div className="detail-content">
                        <strong>Fertile Window</strong>
                        <p>{formatDateShort(cycle.fertileStart)} - {formatDateShort(cycle.fertileEnd)}</p>
                        <small>7 days of possible conception</small>
                      </div>
                    </div>

                    <div className="detail-item peak">
                      <div className="detail-icon">✨</div>
                      <div className="detail-content">
                        <strong>Peak Fertility</strong>
                        <p>{formatDateShort(cycle.peakStart)} - {formatDateShort(cycle.peakEnd)}</p>
                        <small>Highest conception chance</small>
                      </div>
                    </div>

                    <div className="detail-item ovulation">
                      <div className="detail-icon">🥚</div>
                      <div className="detail-content">
                        <strong>Ovulation Day</strong>
                        <p>{formatDate(cycle.ovulation)}</p>
                        {cycle.daysUntilOvulation > 0 && (
                          <small>{cycle.daysUntilOvulation} days away</small>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="timeline-view">
              <div className="timeline-legend">
                <div className="legend-item">
                  <span className="legend-color period"></span>
                  <span>Period</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color fertile"></span>
                  <span>Fertile</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color peak"></span>
                  <span>Peak</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color ovulation"></span>
                  <span>Ovulation</span>
                </div>
              </div>

              {results.cycles.map((cycle, idx) => (
                <div key={idx} className="timeline-cycle">
                  <div className="timeline-label">
                    <strong>Cycle {cycle.cycleNumber}</strong>
                    <small>{formatDateShort(cycle.periodStart)}</small>
                  </div>
                  <div className="timeline-bar-container">
                    <div className="timeline-events">
                      <div 
                        className="timeline-event period"
                        style={{ 
                          left: '0%',
                          width: `${(results.periodLength / results.cycleLength) * 100}%`
                        }}
                      >
                        <span className="event-label">Period</span>
                      </div>
                      <div 
                        className="timeline-event fertile"
                        style={{ 
                          left: `${((cycle.fertileStart - cycle.periodStart) / (1000 * 60 * 60 * 24) / results.cycleLength) * 100}%`,
                          width: `${(7 / results.cycleLength) * 100}%`
                        }}
                      >
                        <span className="event-label">Fertile</span>
                      </div>
                      <div 
                        className="timeline-event peak"
                        style={{ 
                          left: `${((cycle.peakStart - cycle.periodStart) / (1000 * 60 * 60 * 24) / results.cycleLength) * 100}%`,
                          width: `${(3 / results.cycleLength) * 100}%`
                        }}
                      >
                        <span className="event-label">Peak</span>
                      </div>
                      <div 
                        className="timeline-event ovulation"
                        style={{ 
                          left: `${((cycle.ovulation - cycle.periodStart) / (1000 * 60 * 60 * 24) / results.cycleLength) * 100}%`,
                          width: '2%'
                        }}
                      >
                        <span className="event-marker">🥚</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {irregularCycle && (
            <div className="irregular-notice">
              <div className="notice-icon">⚠️</div>
              <div className="notice-content">
                <strong>Irregular Cycle Notice</strong>
                <p>Your predictions may vary by ±7 days. Track your symptoms and use ovulation tests for more accurate timing.</p>
              </div>
            </div>
          )}

          <div className="results-note">
            <div className="note-icon">ℹ️</div>
            <p>
              <strong>Note:</strong> These predictions are estimates based on average cycle patterns. 
              Actual dates may vary. For personalized tracking with AI-powered predictions, download the Flo app.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CycleCalculator
