const studyPlan = {
    days: [
        {
            title: "Day 1: Chapter 4 - Vector/SIMD Basics",
            sessions: [
                {
                    title: "Morning Session",
                    topic: "Vector processor calculations",
                    priorKnowledge: [
                        "Basic computer architecture concepts",
                        "Understanding of CPU cycles and clock speed",
                        "Basic arithmetic operations"
                    ],
                    keyConcepts: [
                        "Performance calculations (4.13)",
                        "Formula: GFLOPs/s = GHz × efficiency × cores × operations/cycle"
                    ],
                    practice: "Work through similar problems"
                },
                {
                    title: "Afternoon Session",
                    topic: "Loop dependencies",
                    priorKnowledge: [
                        "Basic loop structures in programming",
                        "Understanding of data dependencies",
                        "Basic compiler concepts"
                    ],
                    keyConcepts: [
                        "GCD test (4.14)",
                        "True/anti/output dependencies"
                    ],
                    practice: "Create dependency diagrams"
                },
                {
                    title: "Evening Session",
                    priorKnowledge: [
                        "Basic mathematical calculations",
                        "Understanding of performance metrics"
                    ],
                    practice: [
                        "Review and practice calculations",
                        "Create formula reference sheet"
                    ]
                }
            ]
        },
        {
            title: "Day 2: Chapter 4 - Advanced Topics",
            sessions: [
                {
                    title: "Morning Session",
                    topic: "Memory patterns",
                    keyConcepts: [
                        "Branch divergence",
                        "Memory latency",
                        "Coalesced memory access"
                    ]
                },
                {
                    title: "Afternoon Session",
                    topic: "Bandwidth calculations",
                    keyConcepts: [
                        "Memory bandwidth",
                        "Bandwidth limitations"
                    ],
                    practice: "Work through similar problems"
                },
                {
                    title: "Evening Session",
                    practice: [
                        "Review and create quick reference notes",
                        "Practice problems"
                    ]
                }
            ]
        },
        {
            title: "Day 3: Chapter 5 - Cache Coherence Basics",
            sessions: [
                {
                    title: "Morning Session",
                    topic: "Cache states",
                    keyConcepts: [
                        "Cache line states (5.1)",
                        "I, S, E, M states"
                    ],
                    practice: "State transition diagrams"
                },
                {
                    title: "Afternoon Session",
                    topic: "Basic protocols",
                    keyConcepts: [
                        "Cache operations (5.2)",
                        "Read/write operations"
                    ],
                    practice: "Protocol tracing"
                },
                {
                    title: "Evening Session",
                    practice: [
                        "Review state transitions",
                        "Create protocol reference sheet"
                    ]
                }
            ]
        },
        {
            title: "Day 4: Chapter 5 - Directory Protocol",
            sessions: [
                {
                    title: "Morning Session",
                    topic: "Directory-based coherence",
                    keyConcepts: [
                        "Directory protocol (5.9)",
                        "Message types"
                    ],
                    practice: "Protocol analysis"
                },
                {
                    title: "Afternoon Session",
                    topic: "Write-through vs write-back",
                    keyConcepts: [
                        "Protocol differences (5.23)",
                        "State transitions"
                    ],
                    practice: "Compare protocols"
                },
                {
                    title: "Evening Session",
                    practice: [
                        "Review protocols",
                        "Create protocol comparison sheet"
                    ]
                }
            ]
        },
        {
            title: "Day 5: Chapter 5 - Memory Consistency",
            sessions: [
                {
                    title: "Morning Session",
                    topic: "Basic consistency models",
                    keyConcepts: [
                        "Sequential consistency (5.15)",
                        "Total store order"
                    ],
                    practice: "Model analysis"
                },
                {
                    title: "Afternoon Session",
                    topic: "Synchronization",
                    keyConcepts: [
                        "Synchronization primitives",
                        "Memory barriers"
                    ],
                    practice: "Barrier implementation"
                },
                {
                    title: "Evening Session",
                    practice: [
                        "Review consistency models",
                        "Create model comparison sheet"
                    ]
                }
            ]
        },
        {
            title: "Day 6: Chapter 5 - Advanced Topics",
            sessions: [
                {
                    title: "Morning Session",
                    topic: "Cache block states",
                    keyConcepts: [
                        "Valid bits (5.25)",
                        "Partial block operations"
                    ],
                    practice: "State analysis"
                },
                {
                    title: "Afternoon Session",
                    topic: "Protocol complications",
                    keyConcepts: [
                        "Protocol issues (5.29)",
                        "Deadlock prevention"
                    ],
                    practice: "Problem solving"
                },
                {
                    title: "Evening Session",
                    practice: [
                        "Review troubleshooting",
                        "Create problem-solving guide"
                    ]
                }
            ]
        },
        {
            title: "Day 7: Final Review",
            sessions: [
                {
                    title: "Morning Session",
                    topic: "Review Chapter 4",
                    keyConcepts: [
                        "Vector/SIMD concepts",
                        "Performance calculations",
                        "Memory patterns"
                    ]
                },
                {
                    title: "Afternoon Session",
                    topic: "Review Chapter 5",
                    keyConcepts: [
                        "Cache coherence protocols",
                        "Memory consistency",
                        "State transitions"
                    ]
                },
                {
                    title: "Evening Session",
                    practice: [
                        "Practice problems",
                        "Review calculations",
                        "Review protocol traces"
                    ]
                }
            ]
        },
        {
            title: "Day 8: Exam Preparation",
            sessions: [
                {
                    title: "Morning Session",
                    topic: "Organize materials",
                    practice: [
                        "Create final reference sheets",
                        "Mark important sections",
                        "Organize practice solutions"
                    ]
                },
                {
                    title: "Afternoon Session",
                    topic: "Quick review",
                    practice: [
                        "Review key formulas",
                        "Review protocol diagrams",
                        "Review state transitions"
                    ]
                },
                {
                    title: "Evening Session",
                    practice: [
                        "Get good sleep",
                        "Prepare materials for exam",
                        "Review quick reference sheets"
                    ]
                }
            ]
        }
    ]
};

// Add prior knowledge to all sessions
studyPlan.days.forEach(day => {
    day.sessions.forEach(session => {
        if (!session.priorKnowledge) {
            session.priorKnowledge = [
                "Basic computer architecture concepts",
                "Understanding of the previous session's topics"
            ];
        }
    });
});

// Add detailed explanations for basic concepts
const knowledgeBase = {
    "Basic computer architecture concepts": {
        title: "Basic Computer Architecture Concepts",
        content: `
            <h2>Basic Computer Architecture Concepts</h2>
            <h3>1. CPU Components</h3>
            <ul>
                <li><strong>Control Unit (CU):</strong> Manages instruction execution and data flow</li>
                <li><strong>Arithmetic Logic Unit (ALU):</strong> Performs arithmetic and logical operations</li>
                <li><strong>Registers:</strong> Fast storage locations within the CPU</li>
                <li><strong>Cache:</strong> Fast memory between CPU and main memory</li>
                <li><strong>System Bus:</strong> Communication path between components</li>
            </ul>

            <h3>2. Memory Hierarchy</h3>
            <ul>
                <li><strong>Registers:</strong> Fastest, smallest, most expensive</li>
                <li><strong>Cache:</strong> L1, L2, L3 caches with different speeds and sizes</li>
                <li><strong>Main Memory (RAM):</strong> Volatile, medium speed</li>
                <li><strong>Secondary Storage:</strong> Non-volatile, slower (HDD/SSD)</li>
            </ul>

            <h3>3. Instruction Execution</h3>
            <ul>
                <li><strong>Fetch:</strong> Get instruction from memory</li>
                <li><strong>Decode:</strong> Interpret instruction</li>
                <li><strong>Execute:</strong> Perform operation</li>
                <li><strong>Store:</strong> Save results</li>
            </ul>

            <h3>4. Pipelining</h3>
            <ul>
                <li><strong>Instruction Pipeline:</strong> Multiple instructions in different stages</li>
                <li><strong>Pipeline Hazards:</strong> Data, control, and structural hazards</li>
                <li><strong>Branch Prediction:</strong> Predicting next instruction</li>
            </ul>
        `
    },
    "Understanding of CPU cycles and clock speed": {
        title: "CPU Cycles and Clock Speed",
        content: `
            <h2>CPU Cycles and Clock Speed</h2>
            <h3>1. Clock Speed Basics</h3>
            <ul>
                <li><strong>Clock Cycle:</strong> Basic unit of CPU time</li>
                <li><strong>Clock Rate:</strong> Number of cycles per second (Hz)</li>
                <li><strong>Clock Period:</strong> Time for one cycle (1/clock rate)</li>
            </ul>

            <h3>2. Performance Metrics</h3>
            <ul>
                <li><strong>Instructions per Cycle (IPC):</strong> Average instructions executed per cycle</li>
                <li><strong>CPI (Cycles per Instruction):</strong> Average cycles needed per instruction</li>
                <li><strong>MIPS (Million Instructions Per Second):</strong> Basic performance metric</li>
            </ul>

            <h3>3. Clock Speed Impact</h3>
            <ul>
                <li><strong>Power Consumption:</strong> Increases with clock speed</li>
                <li><strong>Heat Generation:</strong> Higher clock speed = more heat</li>
                <li><strong>Performance:</strong> Not always linear with clock speed</li>
            </ul>
        `
    },
    "Basic arithmetic operations": {
        title: "Basic Arithmetic Operations",
        content: `
            <h2>Basic Arithmetic Operations</h2>
            <h3>1. Integer Operations</h3>
            <ul>
                <li><strong>Addition/Subtraction:</strong> Basic ALU operations</li>
                <li><strong>Multiplication:</strong> Multiple addition steps</li>
                <li><strong>Division:</strong> Multiple subtraction steps</li>
                <li><strong>Shift Operations:</strong> Left/right bit shifting</li>
            </ul>

            <h3>2. Floating-Point Operations</h3>
            <ul>
                <li><strong>IEEE 754 Format:</strong> Standard floating-point representation</li>
                <li><strong>Special Values:</strong> NaN, Infinity, -Infinity</li>
                <li><strong>Rounding Modes:</strong> Round to nearest, round up, round down</li>
            </ul>

            <h3>3. Performance Considerations</h3>
            <ul>
                <li><strong>Operation Latency:</strong> Time to complete operation</li>
                <li><strong>Pipelining:</strong> Multiple operations in progress</li>
                <li><strong>SIMD Operations:</strong> Single instruction, multiple data</li>
            </ul>
        `
    },
    "Basic loop structures in programming": {
        title: "Basic Loop Structures in Programming",
        content: `
            <h2>Basic Loop Structures in Programming</h2>
            <h3>1. Loop Types</h3>
            <ul>
                <li><strong>For Loops:</strong> Fixed iteration count</li>
                <li><strong>While Loops:</strong> Condition-based iteration</li>
                <li><strong>Do-While Loops:</strong> At least one iteration</li>
                <li><strong>Nested Loops:</strong> Loops within loops</li>
            </ul>

            <h3>2. Loop Optimization</h3>
            <ul>
                <li><strong>Loop Unrolling:</strong> Reducing loop overhead</li>
                <li><strong>Loop Fusion:</strong> Combining multiple loops</li>
                <li><strong>Loop Tiling:</strong> Improving cache utilization</li>
                <li><strong>Vectorization:</strong> SIMD operations in loops</li>
            </ul>

            <h3>3. Dependencies</h3>
            <ul>
                <li><strong>Data Dependencies:</strong> RAW, WAR, WAW</li>
                <li><strong>Control Dependencies:</strong> Branch conditions</li>
                <li><strong>Loop-Carried Dependencies:</strong> Between iterations</li>
            </ul>
        `
    },
    "Understanding of data dependencies": {
        title: "Understanding of Data Dependencies",
        content: `
            <h2>Understanding of Data Dependencies</h2>
            <h3>1. Types of Dependencies</h3>
            <ul>
                <li><strong>Read After Write (RAW):</strong> True dependency</li>
                <li><strong>Write After Read (WAR):</strong> Anti-dependency</li>
                <li><strong>Write After Write (WAW):</strong> Output dependency</li>
            </ul>

            <h3>2. Impact on Performance</h3>
            <ul>
                <li><strong>Pipeline Stalls:</strong> When dependencies prevent parallel execution</li>
                <li><strong>Out-of-Order Execution:</strong> Reordering instructions</li>
                <li><strong>Speculation:</strong> Predicting and executing ahead</li>
            </ul>

            <h3>3. Optimization Techniques</h3>
            <ul>
                <li><strong>Register Renaming:</strong> Eliminating false dependencies</li>
                <li><strong>Instruction Scheduling:</strong> Reordering for better performance</li>
                <li><strong>Loop Transformations:</strong> Reducing dependencies in loops</li>
            </ul>
        `
    }
};

function createDayCard(day) {
    const card = document.createElement('div');
    card.className = 'day-card';
    
    let html = `<h3>${day.title}</h3>`;
    
    day.sessions.forEach((session, index) => {
        const sessionId = `${day.title.replace(/\s+/g, '-')}-${index}`;
        html += `
            <div class="session">
                <h4>${session.title}</h4>
                ${session.topic ? `<p><strong>Topic:</strong> ${session.topic}</p>` : ''}
                ${session.priorKnowledge ? `
                    <div class="prior-knowledge">
                        <strong>Prior Knowledge Required:</strong>
                        <ul>
                            ${session.priorKnowledge.map(knowledge => 
                                knowledgeBase[knowledge] 
                                    ? `<li><span class="knowledge-item" onclick="showKnowledge('${knowledge}')">${knowledge}</span></li>`
                                    : `<li>${knowledge}</li>`
                            ).join('')}
                        </ul>
                    </div>
                ` : ''}
                ${session.keyConcepts ? `
                    <div class="key-concept">
                        <strong>Key Concepts:</strong>
                        <ul>
                            ${session.keyConcepts.map(concept => `<li>${concept}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                ${session.practice ? `
                    <div class="practice">
                        <strong>Practice:</strong>
                        ${Array.isArray(session.practice) 
                            ? `<ul>${session.practice.map(p => `<li>${p}</li>`).join('')}</ul>`
                            : `<p>${session.practice}</p>`
                        }
                    </div>
                ` : ''}
                <div class="progress-tracker" id="${sessionId}">
                    <div class="checkbox-container">
                        <input type="checkbox" id="checkbox-${sessionId}" onchange="updateProgress('${sessionId}')">
                        <label for="checkbox-${sessionId}">Mark as completed</label>
                    </div>
                </div>
            </div>
        `;
    });
    
    card.innerHTML = html;
    return card;
}

function updateProgress(sessionId) {
    const tracker = document.getElementById(sessionId);
    const checkbox = tracker.querySelector('input[type="checkbox"]');
    
    if (checkbox.checked) {
        tracker.classList.add('completed');
    } else {
        tracker.classList.remove('completed');
    }
    
    updateOverallProgress();
}

function updateOverallProgress() {
    const totalSessions = document.querySelectorAll('.progress-tracker').length;
    const completedSessions = document.querySelectorAll('.progress-tracker.completed').length;
    const percentage = Math.round((completedSessions / totalSessions) * 100);
    
    document.getElementById('progressFill').style.width = `${percentage}%`;
    document.getElementById('progressText').textContent = `${percentage}% Complete`;
}

// Progress Tracking
const totalDays = 8;
let completedDays = 0;

// Load saved progress
function loadProgress() {
    const savedProgress = localStorage.getItem('studyProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        progress.forEach(day => {
            const checkbox = document.querySelector(`input[data-day="${day}"]`);
            if (checkbox) {
                checkbox.checked = true;
                checkbox.closest('.progress-tracker').classList.add('completed');
                completedDays++;
            }
        });
        updateProgressBar();
    }
}

// Save progress
function saveProgress() {
    const checkboxes = document.querySelectorAll('.progress-tracker input[type="checkbox"]:checked');
    const completedDays = Array.from(checkboxes).map(checkbox => parseInt(checkbox.dataset.day));
    localStorage.setItem('studyProgress', JSON.stringify(completedDays));
    updateProgressBar();
}

// Update progress bar
function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const percentage = (completedDays / totalDays) * 100;
    
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${Math.round(percentage)}% Complete`;
}

// Add event listeners to checkboxes
document.querySelectorAll('.progress-tracker input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const tracker = checkbox.closest('.progress-tracker');
        if (checkbox.checked) {
            tracker.classList.add('completed');
            completedDays++;
        } else {
            tracker.classList.remove('completed');
            completedDays--;
        }
        saveProgress();
    });
});

// Load progress when page loads
document.addEventListener('DOMContentLoaded', loadProgress);

function showKnowledge(key) {
    const modal = document.getElementById('knowledgeModal');
    const modalContent = document.getElementById('modalContent');
    const knowledge = knowledgeBase[key];
    
    if (knowledge) {
        modalContent.innerHTML = knowledge.content;
        modal.style.display = 'block';
    }
}

// Close modal when clicking the X
document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('knowledgeModal').style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('knowledgeModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const scheduleSection = document.querySelector('.schedule');
    studyPlan.days.forEach(day => {
        scheduleSection.appendChild(createDayCard(day));
    });
    
    loadProgress();
    
    // Save progress when checkbox changes
    document.querySelectorAll('.progress-tracker input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', saveProgress);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add animation to timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'all 0.5s ease-out';
    observer.observe(item);
});

// Add hover effect to cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    });
});

// Prior Knowledge Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    const modal = document.getElementById('priorKnowledgeModal');
    const closeBtn = document.querySelector('.close-modal');
    
    // Add click event to "Quick Prior Knowledge Check" link
    const priorKnowledgeLink = document.querySelector('a[href="#prior-knowledge"]');
    if (priorKnowledgeLink) {
        priorKnowledgeLink.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
        });
    }
    
    // Close modal when clicking the X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Keep progress bar visible
    const progressSummary = document.querySelector('.progress-summary');
    if (progressSummary) {
        progressSummary.style.display = 'block';
    }
}); 