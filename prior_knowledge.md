# Prior Knowledge – Detailed Breakdown

## 1. 🔁 Basic Pipelining Stages
### 📍 Relevance:
- Chapter 2 & 3 exercises often assume you're familiar with the 5-stage MIPS pipeline
- Needed when analyzing performance metrics like CPI, pipeline hazards, and throughput

### 📘 Key Concepts:
- IF → ID → EX → MEM → WB
  - IF (Instruction Fetch): fetch instruction from memory
  - ID (Instruction Decode/Register Fetch): decode and read registers
  - EX (Execute): perform ALU operation or calculate memory address
  - MEM (Memory Access): read/write data from/to memory
  - WB (Write Back): write result back to register

### ⚠️ Know These Hazards:
- Structural hazard (two instructions need same hardware)
- Data hazard (RAW, WAR, WAW)
- Control hazard (branches and jumps)

## 2. 🧠 Cache Fundamentals
### 📍 Relevance:
- Crucial for Chapter 4 questions (like 4.13–4.16)
- Required when interpreting miss/hit rate, access time, and memory hierarchy

### 📘 Key Concepts:
- Locality Principles: temporal vs. spatial
- Cache types:
  - Direct-mapped
  - Set-associative
  - Fully associative
- Key formulas:
  - AMAT = Hit time + Miss rate × Miss penalty
  - CPI memory = Memory accesses × Miss rate × Miss penalty

### 🛠 Tools:
- You may encounter formulas involving tag/index/offset bits from addresses

## 3. 📤 How Registers Are Spilled
### 📍 Relevance:
- Critical for Lecture 8.2 (Register Allocation) and compiler backend
- Often tested in how register allocators work under pressure (limited registers)

### 📘 Key Concepts:
- Spilling happens when not enough physical registers are available
- Temporary variables are stored in memory (stack frame)
- Affect performance due to memory load/store operations

## 4. 🧮 Static vs Dynamic Instruction Scheduling
### 📍 Relevance:
- Shows up in Lecture 8.1 - Instruction Scheduling and Chapter 3/5
- Affects ILP (Instruction-Level Parallelism) and performance

### 📘 Key Concepts:
| Type | Performed By | Example Techniques |
|------|--------------|-------------------|
| Static | Compiler | Loop unrolling, instruction reordering |
| Dynamic | Processor | Tomasulo's algorithm, Scoreboarding |

- Static scheduling is limited but fast
- Dynamic allows better ILP at runtime but increases complexity

## 5. 🧾 How IR Translates into Assembly
### 📍 Relevance:
- Needed to understand ILOC, LLVM IR → target RISC-V
- Comes up in Lectures 6.2, 7.2

### 📘 Key Concepts:
- ILOC is an abstract IR used to represent operations like load, store, add, etc.
- IR helps the compiler reason about program logic before lowering it to real instructions
- LLVM passes transform IR step by step (like mem2reg which turns loads/stores into register ops)

### 🛠 Example:
```
%1 = load i32, i32* %ptr
%2 = add i32 %1, 4
store i32 %2, i32* %ptr
```
➡ Eventually becomes RISC-V like:
```
lw t0, 0(t1)
addi t0, t0, 4
sw t0, 0(t1)
```

## 6. 🧩 Difference Between Compiler Front-End & Back-End
### 📍 Relevance:
- Shows up in Lectures 5.1, 5.2 and again in optimization lectures

### 📘 Key Concepts:
| Part | Role | Examples |
|------|------|----------| 