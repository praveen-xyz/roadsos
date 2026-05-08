import React, { useState, useEffect, useRef } from 'react';
import { Camera, Phone, MapPin, Heart, Users, Wifi, WifiOff, Mic, Activity, Navigation, Clock, AlertTriangle, CheckCircle, TrendingUp, Moon, Sun, Menu, X, Volume2, Play, Car, Ambulance, Building2, Radio, Shield, Zap, Bell, Share2, Download, QrCode, Star } from 'lucide-react';

// Main App Component
export default function RoadSoSApp() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [isDark, setIsDark] = useState(true);
  const [emergencyMode, setEmergencyMode] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (currentScreen === 'splash') {
      setTimeout(() => setCurrentScreen('demo-access'), 2000);
    }
  }, [currentScreen]);

  useEffect(() => {
    if (emergencyMode && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (emergencyMode && countdown === 0) {
      setCurrentScreen('sos');
    }
  }, [emergencyMode, countdown]);

  const theme = {
    bg: isDark ? '#0a0a0f' : '#f8f9fa',
    card: isDark ? '#1a1a2e' : '#ffffff',
    text: isDark ? '#ffffff' : '#1a1a2e',
    textSec: isDark ? '#a0a0b0' : '#6c757d',
    accent: '#00d4ff',
    danger: '#ff3366',
    success: '#00ff88',
    warning: '#ffaa00',
    gradient: isDark ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  };

  // Splash Screen
  if (currentScreen === 'splash') {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{ textAlign: 'center', animation: 'fadeIn 1s ease-in' }}>
          <div style={{
            width: 120,
            height: 120,
            background: 'rgba(255,255,255,0.2)',
            borderRadius: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            backdropFilter: 'blur(10px)',
            animation: 'pulse 2s infinite'
          }}>
            <Shield size={60} color="#fff" />
          </div>
          <h1 style={{ color: '#fff', fontSize: 48, margin: 0, fontWeight: 800 }}>RoadSoS</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18, marginTop: 8 }}>AI Emergency Response System</p>
        </div>
      </div>
    );
  }

  // Demo Access Screen
  if (currentScreen === 'demo-access') {
    return (
      <div style={{
        minHeight: '100vh',
        background: theme.gradient,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: 20
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(20px)',
          borderRadius: 24,
          padding: 48,
          textAlign: 'center',
          maxWidth: 480,
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}>
          <div style={{
            width: 80,
            height: 80,
            background: 'rgba(255,255,255,0.25)',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px'
          }}>
            <Shield size={40} color="#fff" />
          </div>
          <h2 style={{ color: '#fff', fontSize: 32, margin: '0 0 12px', fontWeight: 700 }}>Welcome to RoadSoS</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
            Experience the future of AI-powered emergency response. Instant demo access - no signup required.
          </p>
          <button
            onClick={() => setCurrentScreen('dashboard')}
            style={{
              background: '#fff',
              color: '#667eea',
              border: 'none',
              padding: '16px 48px',
              borderRadius: 12,
              fontSize: 18,
              fontWeight: 700,
              cursor: 'pointer',
              width: '100%',
              transition: 'transform 0.2s',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
          >
            Enter Demo
          </button>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, marginTop: 16 }}>
            🚀 Full access to all features • No authentication needed
          </p>
        </div>
      </div>
    );
  }

  // Main App Wrapper
  return (
    <div style={{
      minHeight: '100vh',
      background: theme.bg,
      color: theme.text,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative'
    }}>
      {/* Emergency Mode Overlay */}
      {emergencyMode && countdown > 0 && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 0, 0, 0.95)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'pulse 1s infinite'
        }}>
          <div style={{ textAlign: 'center' }}>
            <AlertTriangle size={80} color="#fff" style={{ marginBottom: 24, animation: 'shake 0.5s infinite' }} />
            <h1 style={{ color: '#fff', fontSize: 48, margin: '0 0 16px' }}>{countdown}</h1>
            <p style={{ color: '#fff', fontSize: 24 }}>Emergency SOS Activating...</p>
            <button
              onClick={() => { setEmergencyMode(false); setCountdown(10); }}
              style={{
                marginTop: 24,
                background: '#fff',
                color: '#ff0000',
                border: 'none',
                padding: '12px 32px',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Top Bar */}
      <div style={{
        background: theme.card,
        padding: '16px 20px',
        borderBottom: `1px solid ${isDark ? '#2a2a3e' : '#e0e0e0'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Shield size={28} color={theme.accent} />
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>RoadSoS</h3>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button
            onClick={() => setIsDark(!isDark)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: theme.text,
              padding: 8
            }}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Menu size={24} color={theme.text} style={{ cursor: 'pointer' }} />
        </div>
      </div>

      {/* Content */}
      {currentScreen === 'dashboard' && <Dashboard theme={theme} setScreen={setCurrentScreen} setEmergencyMode={setEmergencyMode} />}
      {currentScreen === 'ai-detection' && <AIDetection theme={theme} setScreen={setCurrentScreen} setEmergencyMode={setEmergencyMode} />}
      {currentScreen === 'map' && <LiveMap theme={theme} setScreen={setCurrentScreen} />}
      {currentScreen === 'sos' && <SOSScreen theme={theme} setScreen={setCurrentScreen} />}
      {currentScreen === 'ambulance' && <AmbulanceTracking theme={theme} setScreen={setCurrentScreen} />}
      {currentScreen === 'crowd-rescue' && <CrowdRescue theme={theme} setScreen={setCurrentScreen} />}
      {currentScreen === 'medical-profile' && <MedicalProfile theme={theme} setScreen={setCurrentScreen} />}
      {currentScreen === 'history' && <AccidentHistory theme={theme} setScreen={setCurrentScreen} />}
      {currentScreen === 'hospitals' && <SmartHospital theme={theme} setScreen={setCurrentScreen} />}

      {/* Bottom Navigation */}
      <BottomNav theme={theme} currentScreen={currentScreen} setScreen={setCurrentScreen} />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// Dashboard Component
function Dashboard({ theme, setScreen, setEmergencyMode }) {
  const [safetyStatus, setSafetyStatus] = useState('safe');
  const [speed, setSpeed] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSpeed = 40 + Math.random() * 40;
      setSpeed(Math.round(newSpeed));
      if (newSpeed > 75) setSafetyStatus('warning');
      else if (newSpeed > 65) setSafetyStatus('caution');
      else setSafetyStatus('safe');
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const statusColor = safetyStatus === 'safe' ? theme.success : safetyStatus === 'warning' ? theme.warning : theme.danger;

  return (
    <div style={{ padding: 20, paddingBottom: 100 }}>
      {/* Hero Status Card */}
      <div style={{
        background: theme.card,
        borderRadius: 24,
        padding: 32,
        marginBottom: 24,
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        border: `2px solid ${statusColor}`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          background: `${statusColor}20`,
          borderRadius: '50%',
          filter: 'blur(40px)'
        }} />
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: statusColor,
              animation: 'pulse 2s infinite'
            }} />
            <span style={{ fontSize: 14, fontWeight: 600, color: statusColor, textTransform: 'uppercase' }}>
              {safetyStatus === 'safe' ? 'AI Monitoring Active' : 'Warning Detected'}
            </span>
          </div>
          <h2 style={{ fontSize: 36, margin: '0 0 8px', fontWeight: 800 }}>You're {safetyStatus === 'safe' ? 'Safe' : 'At Risk'}</h2>
          <p style={{ color: theme.textSec, fontSize: 16, margin: 0 }}>AI accident detection active • {speed} km/h</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <button
              onClick={() => setScreen('ai-detection')}
              style={{
                background: theme.accent,
                color: '#000',
                border: 'none',
                padding: '12px 24px',
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                flex: 1
              }}
            >
              View Details
            </button>
            <button
              onClick={() => setEmergencyMode(true)}
              style={{
                background: theme.danger,
                color: '#fff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                flex: 1
              }}
            >
              Emergency SOS
            </button>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 24 }}>
        <QuickCard theme={theme} icon={<MapPin size={24} />} title="Live Map" subtitle="Track emergency units" onClick={() => setScreen('map')} />
        <QuickCard theme={theme} icon={<Ambulance size={24} />} title="Ambulance" subtitle="Request rescue" onClick={() => setScreen('ambulance')} />
        <QuickCard theme={theme} icon={<Users size={24} />} title="Crowd Rescue" subtitle="2 volunteers nearby" onClick={() => setScreen('crowd-rescue')} />
        <QuickCard theme={theme} icon={<Heart size={24} />} title="Medical Profile" subtitle="AB+ • No allergies" onClick={() => setScreen('medical-profile')} />
      </div>

      {/* AI Safety Prediction */}
      <div style={{
        background: theme.card,
        borderRadius: 20,
        padding: 24,
        marginBottom: 24,
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <Zap size={20} color={theme.accent} />
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>AI Safety Prediction</h3>
        </div>
        <div style={{
          background: `${theme.warning}20`,
          border: `1px solid ${theme.warning}`,
          borderRadius: 12,
          padding: 16,
          marginBottom: 12
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <AlertTriangle size={18} color={theme.warning} />
            <span style={{ fontWeight: 600, fontSize: 14 }}>High Risk Area Ahead</span>
          </div>
          <p style={{ margin: 0, fontSize: 13, color: theme.textSec }}>Sharp turn in 500m • Reduce speed to 40 km/h</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ flex: 1, textAlign: 'center', padding: 12, background: `${theme.accent}10`, borderRadius: 8 }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: theme.accent }}>85%</div>
            <div style={{ fontSize: 11, color: theme.textSec, marginTop: 4 }}>Safety Score</div>
          </div>
          <div style={{ flex: 1, textAlign: 'center', padding: 12, background: `${theme.success}10`, borderRadius: 8 }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: theme.success }}>0</div>
            <div style={{ fontSize: 11, color: theme.textSec, marginTop: 4 }}>Incidents</div>
          </div>
        </div>
      </div>

      {/* Emergency Services */}
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Emergency Services</h3>
      <div style={{ display: 'grid', gap: 12 }}>
        <ServiceCard theme={theme} icon={<Building2 size={20} />} title="Smart Hospital" subtitle="5 hospitals nearby" onClick={() => setScreen('hospitals')} />
        <ServiceCard theme={theme} icon={<Car size={20} />} title="Vehicle Rescue" subtitle="Towing • Mechanic" onClick={() => {}} />
        <ServiceCard theme={theme} icon={<Activity size={20} />} title="Accident History" subtitle="View past incidents" onClick={() => setScreen('history')} />
      </div>
    </div>
  );
}

// AI Detection Screen
function AIDetection({ theme, setScreen, setEmergencyMode }) {
  const [accel, setAccel] = useState({ x: 0.2, y: 0.1, z: 9.8 });
  const [gyro, setGyro] = useState({ x: 0.05, y: -0.02, z: 0.01 });
  const [severity, setSeverity] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setAccel({
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
        z: 9.6 + (Math.random() - 0.5) * 0.4
      });
      setGyro({
        x: (Math.random() - 0.5) * 0.2,
        y: (Math.random() - 0.5) * 0.2,
        z: (Math.random() - 0.5) * 0.2
      });
      setSeverity(Math.random() * 100);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const severityLevel = severity > 70 ? 'critical' : severity > 40 ? 'warning' : 'safe';
  const severityColor = severityLevel === 'critical' ? theme.danger : severityLevel === 'warning' ? theme.warning : theme.success;

  return (
    <div style={{ padding: 20, paddingBottom: 100 }}>
      <button onClick={() => setScreen('dashboard')} style={{
        background: 'transparent',
        border: 'none',
        color: theme.text,
        fontSize: 14,
        cursor: 'pointer',
        marginBottom: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
        ← Back
      </button>

      <h2 style={{ fontSize: 28, margin: '0 0 24px', fontWeight: 700 }}>AI Accident Detection</h2>

      {/* Severity Analysis */}
      <div style={{
        background: theme.card,
        borderRadius: 20,
        padding: 24,
        marginBottom: 20,
        border: `2px solid ${severityColor}`
      }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Crash Severity Analysis</h3>
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 14 }}>Severity Level</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: severityColor }}>{Math.round(severity)}%</span>
          </div>
          <div style={{ height: 8, background: `${theme.textSec}20`, borderRadius: 4, overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${severity}%`,
              background: severityColor,
              transition: 'width 0.5s'
            }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: theme.textSec }}>
          <span>Safe</span>
          <span>Warning</span>
          <span>Critical</span>
        </div>
        {severity > 70 && (
          <button
            onClick={() => setEmergencyMode(true)}
            style={{
              marginTop: 16,
              background: theme.danger,
              color: '#fff',
              border: 'none',
              padding: '12px',
              borderRadius: 8,
              width: '100%',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Trigger Emergency SOS
          </button>
        )}
      </div>

      {/* Sensor Data */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 20 }}>
        <SensorCard theme={theme} title="Accelerometer" data={accel} unit="m/s²" />
        <SensorCard theme={theme} title="Gyroscope" data={gyro} unit="rad/s" />
      </div>

      {/* Live Monitoring */}
      <div style={{ background: theme.card, borderRadius: 20, padding: 24 }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Live Monitoring Status</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <StatusRow theme={theme} label="GPS Tracking" status="Active" color={theme.success} />
          <StatusRow theme={theme} label="Motion Sensors" status="Calibrated" color={theme.success} />
          <StatusRow theme={theme} label="AI Analysis" status="Running" color={theme.accent} />
          <StatusRow theme={theme} label="Emergency Ready" status="Standby" color={theme.warning} />
        </div>
      </div>
    </div>
  );
}

// SOS Screen
function SOSScreen({ theme, setScreen }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => p < 100 ? p + 2 : 100);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: theme.danger,
      color: '#fff',
      padding: 20,
      paddingBottom: 100
    }}>
      <div style={{ textAlign: 'center', paddingTop: 60 }}>
        <div style={{
          width: 120,
          height: 120,
          margin: '0 auto 24px',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'pulse 1.5s infinite'
        }}>
          <AlertTriangle size={60} />
        </div>
        <h1 style={{ fontSize: 32, margin: '0 0 12px', fontWeight: 800 }}>Emergency SOS Active</h1>
        <p style={{ fontSize: 18, opacity: 0.9 }}>Help is on the way!</p>
      </div>

      {/* Rescue Timeline */}
      <div style={{
        background: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(20px)',
        borderRadius: 20,
        padding: 24,
        marginTop: 40
      }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Rescue Progress</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <TimelineItem icon={<CheckCircle size={20} />} title="Accident Detected" time="00:00" completed />
          <TimelineItem icon={<CheckCircle size={20} />} title="Severity Analyzed" time="00:02" completed />
          <TimelineItem icon={<CheckCircle size={20} />} title="SOS Triggered" time="00:05" completed />
          <TimelineItem icon={<Radio size={20} />} title="Ambulance Dispatched" time="00:10" active />
          <TimelineItem icon={<Clock size={20} />} title="Rescue Arriving" time="ETA 8 min" />
        </div>
      </div>

      {/* Emergency Contacts */}
      <div style={{
        background: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(20px)',
        borderRadius: 20,
        padding: 24,
        marginTop: 20
      }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Contacted</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <ContactedItem icon={<Ambulance size={18} />} name="Ambulance" status="Dispatched" />
          <ContactedItem icon={<Building2 size={18} />} name="Apollo Hospital" status="Prepared" />
          <ContactedItem icon={<Shield size={18} />} name="Police" status="Notified" />
          <ContactedItem icon={<Heart size={18} />} name="Emergency Contact" status="Alerted" />
        </div>
      </div>

      <button
        onClick={() => setScreen('ambulance')}
        style={{
          marginTop: 24,
          background: '#fff',
          color: theme.danger,
          border: 'none',
          padding: '16px',
          borderRadius: 12,
          width: '100%',
          fontSize: 16,
          fontWeight: 700,
          cursor: 'pointer'
        }}
      >
        Track Ambulance
      </button>
    </div>
  );
}

// Live Map Screen
function LiveMap({ theme, setScreen }) {
  const [ambulances] = useState([
    { id: 1, lat: 13.0827, lng: 80.2707, eta: 8 },
    { id: 2, lat: 13.0867, lng: 80.2747, eta: 12 }
  ]);

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      {/* Map Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(135deg, ${theme.accent}40 0%, ${theme.card} 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <MapPin size={60} color={theme.accent} style={{ opacity: 0.3 }} />
      </div>

      {/* Map Overlay */}
      <div style={{ position: 'relative', zIndex: 10, padding: 20 }}>
        <button onClick={() => setScreen('dashboard')} style={{
          background: theme.card,
          border: 'none',
          color: theme.text,
          padding: '12px 20px',
          borderRadius: 12,
          fontSize: 14,
          cursor: 'pointer',
          fontWeight: 600,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          ← Back
        </button>

        {/* Location Cards */}
        <div style={{
          position: 'absolute',
          bottom: 100,
          left: 20,
          right: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 12
        }}>
          <MapCard theme={theme} icon={<Navigation size={20} />} title="Your Location" subtitle="Anna Nagar, Chennai" color={theme.accent} />
          {ambulances.map(amb => (
            <MapCard key={amb.id} icon={<Ambulance size={20} />} title={`Ambulance #${amb.id}`} subtitle={`ETA: ${amb.eta} minutes`} color={theme.danger} />
          ))}
          <MapCard theme={theme} icon={<Building2 size={20} />} title="Apollo Hospital" subtitle="2.3 km away" color={theme.success} />
        </div>
      </div>
    </div>
  );
}

// Ambulance Tracking
function AmbulanceTracking({ theme, setScreen }) {
  const [eta, setEta] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setEta(e => e > 1 ? e - 1 : 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20, paddingBottom: 100 }}>
      <button onClick={() => setScreen('sos')} style={{
        background: 'transparent',
        border: 'none',
        color: theme.text,
        fontSize: 14,
        cursor: 'pointer',
        marginBottom: 16
      }}>
        ← Back to SOS
      </button>

      <div style={{
        background: theme.card,
        borderRadius: 24,
        padding: 24,
        marginBottom: 20,
        textAlign: 'center'
      }}>
        <div style={{
          width: 100,
          height: 100,
          margin: '0 auto 20px',
          background: `${theme.danger}20`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'pulse 2s infinite'
        }}>
          <Ambulance size={50} color={theme.danger} />
        </div>
        <h2 style={{ fontSize: 32, margin: '0 0 8px', fontWeight: 800 }}>{eta} Minutes</h2>
        <p style={{ color: theme.textSec, fontSize: 16 }}>Estimated arrival time</p>
      </div>

      {/* Driver Info */}
      <div style={{ background: theme.card, borderRadius: 20, padding: 24, marginBottom: 20 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Driver Information</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: `${theme.accent}30`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            fontWeight: 700
          }}>
            RK
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>Rajesh Kumar</div>
            <div style={{ fontSize: 13, color: theme.textSec }}>Paramedic • 12 years exp</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
              <Star size={14} color={theme.warning} fill={theme.warning} />
              <span style={{ fontSize: 13, fontWeight: 600 }}>4.9</span>
            </div>
          </div>
          <button style={{
            background: theme.success,
            color: '#fff',
            border: 'none',
            padding: '10px 16px',
            borderRadius: 8,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
            <Phone size={16} />
          </button>
        </div>
      </div>

      {/* Route Progress */}
      <div style={{ background: theme.card, borderRadius: 20, padding: 24 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Route Progress</h3>
        <div style={{ marginBottom: 16 }}>
          <div style={{ height: 8, background: `${theme.textSec}20`, borderRadius: 4, overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${((10 - eta) / 10) * 100}%`,
              background: theme.success,
              transition: 'width 1s'
            }} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <StatusRow theme={theme} label="Ambulance dispatched" status="✓" color={theme.success} />
          <StatusRow theme={theme} label="En route to location" status="Active" color={theme.accent} />
          <StatusRow theme={theme} label="Hospital prepared" status="Ready" color={theme.success} />
        </div>
      </div>
    </div>
  );
}

// Crowd Rescue
function CrowdRescue({ theme, setScreen }) {
  const volunteers = [
    { name: 'Priya S.', distance: '0.8 km', eta: 3, rating: 4.8 },
    { name: 'Arun M.', distance: '1.2 km', eta: 5, rating: 4.9 }
  ];

  return (
    <div style={{ padding: 20, paddingBottom: 100 }}>
      <button onClick={() => setScreen('dashboard')} style={{
        background: 'transparent',
        border: 'none',
        color: theme.text,
        fontSize: 14,
        cursor: 'pointer',
        marginBottom: 16
      }}>
        ← Back
      </button>

      <h2 style={{ fontSize: 28, margin: '0 0 8px', fontWeight: 700 }}>Crowd Rescue Mode</h2>
      <p style={{ color: theme.textSec, marginBottom: 24 }}>Community volunteers responding to your emergency</p>

      <div style={{
        background: `${theme.success}20`,
        border: `1px solid ${theme.success}`,
        borderRadius: 16,
        padding: 20,
        marginBottom: 24,
        textAlign: 'center'
      }}>
        <Users size={40} color={theme.success} style={{ marginBottom: 12 }} />
        <h3 style={{ fontSize: 24, margin: '0 0 8px', fontWeight: 700 }}>2 Volunteers Responding</h3>
        <p style={{ color: theme.textSec, fontSize: 14, margin: 0 }}>Help is nearby!</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {volunteers.map((vol, i) => (
          <div key={i} style={{
            background: theme.card,
            borderRadius: 16,
            padding: 20,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{vol.name}</div>
                <div style={{ fontSize: 13, color: theme.textSec }}>Certified First Responder</div>
              </div>
              <div style={{
                background: `${theme.success}20`,
                padding: '6px 12px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                color: theme.success
              }}>
                {vol.eta} min
              </div>
            </div>
            <div style={{ display: 'flex', gap: 20, marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 12, color: theme.textSec }}>Distance</div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>{vol.distance}</div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: theme.textSec }}>Rating</div>
                <div style={{ fontSize: 16, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Star size={16} color={theme.warning} fill={theme.warning} />
                  {vol.rating}
                </div>
              </div>
            </div>
            <button style={{
              background: theme.accent,
              color: '#000',
              border: 'none',
              padding: '12px',
              borderRadius: 8,
              width: '100%',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              Contact Volunteer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Medical Profile
function MedicalProfile({ theme, setScreen }) {
  return (
    <div style={{ padding: 20, paddingBottom: 100 }}>
      <button onClick={() => setScreen('dashboard')} style={{
        background: 'transparent',
        border: 'none',
        color: theme.text,
        fontSize: 14,
        cursor: 'pointer',
        marginBottom: 16
      }}>
        ← Back
      </button>

      <h2 style={{ fontSize: 28, margin: '0 0 24px', fontWeight: 700 }}>Medical Profile</h2>

      {/* QR Code Card */}
      <div style={{
        background: theme.card,
        borderRadius: 20,
        padding: 24,
        marginBottom: 20,
        textAlign: 'center'
      }}>
        <div style={{
          width: 160,
          height: 160,
          margin: '0 auto 16px',
          background: `${theme.textSec}20`,
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <QrCode size={100} color={theme.text} />
        </div>
        <p style={{ color: theme.textSec, fontSize: 14, marginBottom: 16 }}>Emergency QR Profile</p>
        <button style={{
          background: theme.accent,
          color: '#000',
          border: 'none',
          padding: '12px 24px',
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 600,
          cursor: 'pointer',
          marginRight: 8
        }}>
          <Share2 size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />
          Share
        </button>
      </div>

      {/* Medical Info */}
      <div style={{ background: theme.card, borderRadius: 20, padding: 24, marginBottom: 20 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Health Information</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <InfoRow theme={theme} label="Blood Group" value="AB Positive" />
          <InfoRow theme={theme} label="Allergies" value="None" />
          <InfoRow theme={theme} label="Medical Conditions" value="None" />
          <InfoRow theme={theme} label="Insurance" value="Star Health - Active" />
        </div>
      </div>

      {/* Emergency Contacts */}
      <div style={{ background: theme.card, borderRadius: 20, padding: 24 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Emergency Contacts</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <ContactRow theme={theme} name="Ramesh Kumar" relation="Father" phone="+91 98765 43210" />
          <ContactRow theme={theme} name="Dr. Sharma" relation="Family Doctor" phone="+91 98765 43211" />
        </div>
      </div>
    </div>
  );
}

// Accident History
function AccidentHistory({ theme, setScreen }) {
  const incidents = [
    { date: 'Mar 15, 2026', severity: 'Low', response: '4 min', status: 'Resolved' },
    { date: 'Jan 08, 2026', severity: 'Medium', response: '6 min', status: 'Resolved' }
  ];

  return (
    <div style={{ padding: 20, paddingBottom: 100 }}>
      <button onClick={() => setScreen('dashboard')} style={{
        background: 'transparent',
        border: 'none',
        color: theme.text,
        fontSize: 14,
        cursor: 'pointer',
        marginBottom: 16
      }}>
        ← Back
      </button>

      <h2 style={{ fontSize: 28, margin: '0 0 8px', fontWeight: 700 }}>Accident History</h2>
      <p style={{ color: theme.textSec, marginBottom: 24 }}>{incidents.length} incidents recorded</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {incidents.map((incident, i) => (
          <div key={i} style={{
            background: theme.card,
            borderRadius: 16,
            padding: 20,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{incident.date}</div>
                <div style={{ fontSize: 13, color: theme.textSec }}>Incident #{incidents.length - i}</div>
              </div>
              <div style={{
                background: `${theme.success}20`,
                color: theme.success,
                padding: '6px 12px',
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 600
              }}>
                {incident.status}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 12, color: theme.textSec, marginBottom: 4 }}>Severity</div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{incident.severity}</div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: theme.textSec, marginBottom: 4 }}>Response Time</div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{incident.response}</div>
              </div>
            </div>
            <button style={{
              background: 'transparent',
              border: `1px solid ${theme.accent}`,
              color: theme.accent,
              padding: '10px',
              borderRadius: 8,
              width: '100%',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              <Download size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />
              Download Report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Smart Hospital
function SmartHospital({ theme, setScreen }) {
  const hospitals = [
    { name: 'Apollo Hospital', distance: '2.3 km', beds: 5, trauma: 'Available', rating: 4.8, eta: 8 },
    { name: 'Fortis Malar', distance: '3.1 km', beds: 3, trauma: 'Available', rating: 4.7, eta: 10 },
    { name: 'MIOT Hospital', distance: '4.5 km', beds: 8, trauma: 'Available', rating: 4.9, eta: 12 }
  ];

  return (
    <div style={{ padding: 20, paddingBottom: 100 }}>
      <button onClick={() => setScreen('dashboard')} style={{
        background: 'transparent',
        border: 'none',
        color: theme.text,
        fontSize: 14,
        cursor: 'pointer',
        marginBottom: 16
      }}>
        ← Back
      </button>

      <h2 style={{ fontSize: 28, margin: '0 0 8px', fontWeight: 700 }}>Smart Hospital Selection</h2>
      <p style={{ color: theme.textSec, marginBottom: 24 }}>AI-recommended hospitals based on your location</p>

      <div style={{
        background: `${theme.accent}20`,
        border: `1px solid ${theme.accent}`,
        borderRadius: 16,
        padding: 16,
        marginBottom: 24,
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }}>
        <Zap size={20} color={theme.accent} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>AI Recommendation</div>
          <div style={{ fontSize: 12, color: theme.textSec }}>Apollo Hospital - Best match for your emergency</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {hospitals.map((hospital, i) => (
          <div key={i} style={{
            background: theme.card,
            borderRadius: 16,
            padding: 20,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            border: i === 0 ? `2px solid ${theme.accent}` : 'none'
          }}>
            {i === 0 && (
              <div style={{
                background: theme.accent,
                color: '#000',
                padding: '4px 12px',
                borderRadius: 6,
                fontSize: 11,
                fontWeight: 700,
                display: 'inline-block',
                marginBottom: 12,
                textTransform: 'uppercase'
              }}>
                Recommended
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{hospital.name}</div>
                <div style={{ fontSize: 13, color: theme.textSec, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <MapPin size={12} />
                  {hospital.distance} • ETA {hospital.eta} min
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Star size={14} color={theme.warning} fill={theme.warning} />
                <span style={{ fontSize: 14, fontWeight: 600 }}>{hospital.rating}</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 12, color: theme.textSec, marginBottom: 4 }}>Beds Available</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: theme.success }}>{hospital.beds}</div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: theme.textSec, marginBottom: 4 }}>Trauma Center</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: theme.success }}>{hospital.trauma}</div>
              </div>
            </div>
            <button style={{
              background: i === 0 ? theme.accent : 'transparent',
              border: i === 0 ? 'none' : `1px solid ${theme.accent}`,
              color: i === 0 ? '#000' : theme.accent,
              padding: '12px',
              borderRadius: 8,
              width: '100%',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              {i === 0 ? 'Select Hospital' : 'Choose This'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper Components
function QuickCard({ theme, icon, title, subtitle, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: theme.card,
        borderRadius: 16,
        padding: 20,
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        transition: 'transform 0.2s',
        border: `1px solid ${theme.card}`
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ color: theme.accent, marginBottom: 12 }}>{icon}</div>
      <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 12, color: theme.textSec }}>{subtitle}</div>
    </div>
  );
}

function ServiceCard({ theme, icon, title, subtitle, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: theme.card,
        borderRadius: 12,
        padding: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        cursor: 'pointer',
        border: `1px solid ${theme.card}`,
        transition: 'all 0.2s'
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = theme.accent}
      onMouseLeave={e => e.currentTarget.style.borderColor = theme.card}
    >
      <div style={{
        width: 48,
        height: 48,
        background: `${theme.accent}20`,
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.accent
      }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 2 }}>{title}</div>
        <div style={{ fontSize: 12, color: theme.textSec }}>{subtitle}</div>
      </div>
    </div>
  );
}

function SensorCard({ theme, title, data, unit }) {
  return (
    <div style={{ background: theme.card, borderRadius: 16, padding: 20 }}>
      <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: theme.textSec }}>{title}</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {Object.entries(data).map(([axis, value]) => (
          <div key={axis} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
            <span style={{ color: theme.textSec }}>{axis.toUpperCase()}</span>
            <span style={{ fontWeight: 600, fontFamily: 'monospace' }}>{value.toFixed(2)} {unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusRow({ theme, label, status, color }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 14, color: theme.textSec }}>{label}</span>
      <span style={{ fontSize: 14, fontWeight: 600, color }}>{status}</span>
    </div>
  );
}

function TimelineItem({ icon, title, time, completed, active }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, opacity: completed || active ? 1 : 0.5 }}>
      <div style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: completed ? 'rgba(0,255,136,0.2)' : active ? 'rgba(0,212,255,0.2)' : 'rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 2 }}>{title}</div>
        <div style={{ fontSize: 12, opacity: 0.8 }}>{time}</div>
      </div>
    </div>
  );
}

function ContactedItem({ icon, name, status }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{
        width: 36,
        height: 36,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{name}</div>
        <div style={{ fontSize: 12, opacity: 0.8 }}>{status}</div>
      </div>
      <CheckCircle size={18} color="#00ff88" />
    </div>
  );
}

function MapCard({ theme, icon, title, subtitle, color }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: 16,
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
    }}>
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: `${color}20`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color
      }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a2e', marginBottom: 2 }}>{title}</div>
        <div style={{ fontSize: 12, color: '#6c757d' }}>{subtitle}</div>
      </div>
    </div>
  );
}

function InfoRow({ theme, label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 12, borderBottom: `1px solid ${theme.textSec}20` }}>
      <span style={{ fontSize: 14, color: theme.textSec }}>{label}</span>
      <span style={{ fontSize: 14, fontWeight: 600 }}>{value}</span>
    </div>
  );
}

function ContactRow({ theme, name, relation, phone }) {
  return (
    <div style={{
      background: `${theme.textSec}10`,
      borderRadius: 12,
      padding: 12,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{name}</div>
        <div style={{ fontSize: 12, color: theme.textSec }}>{relation} • {phone}</div>
      </div>
      <Phone size={18} color={theme.accent} style={{ cursor: 'pointer' }} />
    </div>
  );
}

function BottomNav({ theme, currentScreen, setScreen }) {
  const items = [
    { id: 'dashboard', icon: Activity, label: 'Home' },
    { id: 'map', icon: MapPin, label: 'Map' },
    { id: 'ai-detection', icon: Zap, label: 'AI' },
    { id: 'medical-profile', icon: Heart, label: 'Profile' }
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: theme.card,
      borderTop: `1px solid ${theme.textSec}20`,
      padding: '12px 0',
      display: 'flex',
      justifyContent: 'space-around',
      zIndex: 100
    }}>
      {items.map(item => {
        const Icon = item.icon;
        const isActive = currentScreen === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setScreen(item.id)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              color: isActive ? theme.accent : theme.textSec,
              padding: '8px 16px',
              transition: 'all 0.2s'
            }}
          >
            <Icon size={22} />
            <span style={{ fontSize: 11, fontWeight: isActive ? 600 : 400 }}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}