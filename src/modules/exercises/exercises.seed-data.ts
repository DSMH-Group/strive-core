// src/modules/exercises/exercises.seed-data.ts

export interface SeedExercise {
    name: string;
    category: string;
    bodyPart: string;
    description: string;
    instructions: string;
}

export const SEED_EXERCISES: SeedExercise[] = [
    // === GYM & STRENGTH (Upper Body) ===
    {
        name: "Bench Press",
        category: "Strength",
        bodyPart: "Chest",
        description: "A classic compound barbell movement targeting the pectorals, anterior deltoids, and triceps.",
        instructions: "Lie flat on a bench, grip the barbell slightly wider than shoulder-width, lower the bar under control to mid-chest, and push vertically back to lock out."
    },
    {
        name: "Incline Dumbbell Press",
        category: "Strength",
        bodyPart: "Chest",
        description: "An upper pectoral focused compound press executed on a 30-45 degree incline.",
        instructions: "Sit on an incline bench, hold dumbbells at chest level, press upward dynamically until arms are fully extended, then lower slowly."
    },
    {
        name: "Overhead Press",
        category: "Strength",
        bodyPart: "Shoulders",
        description: "Barbell press standing upright, highlighting shoulder power and core stabilization.",
        instructions: "Rest barbell on upper collarbones, brace your core, press the barbell straight up overhead, pushing your head forward slightly at lockout."
    },
    {
        name: "Push Press",
        category: "Strength",
        bodyPart: "Shoulders",
        description: "An explosive overhead press using a leg drive to elevate heavier loads.",
        instructions: "Dip your knees slightly, drive upward forcefully through your legs while pressing the bar vertically overhead."
    },
    {
        name: "Dips",
        category: "Strength",
        bodyPart: "Arms",
        description: "A bodyweight or weighted closed kinetic chain movement for triceps and chest.",
        instructions: "Hold onto parallel bars, suspend yourself, bend elbows to lower body until upper arms are parallel to floor, then press back up."
    },
    {
        name: "Cable Fly",
        category: "Strength",
        bodyPart: "Chest",
        description: "An isolation movement providing constant tension across the chest pectorals.",
        instructions: "Stand in center of cable pulleys, pull handles forward in a wide arc until hands meet, squeezing the chest at peak contraction."
    },
    {
        name: "Lateral Raise",
        category: "Strength",
        bodyPart: "Shoulders",
        description: "Isolation movement focusing on the lateral deltoid head to build shoulder width.",
        instructions: "Hold dumbbells at your sides, raise arms outward to the sides with a slight elbow bend until parallel to the floor, then lower."
    },
    {
        name: "Triceps Pushdown",
        category: "Strength",
        bodyPart: "Arms",
        description: "Isolation movement using a cable attachment to isolate the lateral and medial heads of the triceps.",
        instructions: "Keep elbows tucked to sides, pull rope or bar downward by extending elbows fully, squeezing the triceps at the bottom."
    },
    {
        name: "Pull-up",
        category: "Strength",
        bodyPart: "Back",
        description: "Fundamental compound pull targeting the latissimus dorsi and biceps.",
        instructions: "Hang from a pull-up bar with an overhand grip, pull your chest up towards the bar by driving your elbows down, then lower slowly."
    },
    {
        name: "Lat Pulldown",
        category: "Strength",
        bodyPart: "Back",
        description: "Cable alternative to pull-ups, allowing fine weight adjustments for back training.",
        instructions: "Sit at pulley station, pull bar down towards upper chest, retracting scapula at the bottom."
    },
    {
        name: "Barbell Row",
        category: "Strength",
        bodyPart: "Back",
        description: "Bent-over horizontal pull targeting back thickness.",
        instructions: "Hinge at hips, pull barbell towards lower abdomen, keeping your spine neutral and elbows close to your torso."
    },
    {
        name: "Seated Cable Row",
        category: "Strength",
        bodyPart: "Back",
        description: "Horizontal cable pull for rhomboids, traps, and latissimus dorsi.",
        instructions: "Sit with feet braced, pull handle towards lower chest, squeezing shoulder blades together."
    },
    {
        name: "Face Pull",
        category: "Strength",
        bodyPart: "Shoulders",
        description: "Targeted cable movement for the rear delts and rotator cuff health.",
        instructions: "Pull cable rope towards nose, separating your hands and pulling elbows back to achieve external shoulder rotation."
    },
    {
        name: "Barbell Curl",
        category: "Strength",
        bodyPart: "Arms",
        description: "Classic isolation movement targeting the biceps brachii.",
        instructions: "Hold barbell underhand, curl bar upwards toward shoulders while keeping elbows stationary at your sides."
    },
    {
        name: "Hammer Curl",
        category: "Strength",
        bodyPart: "Arms",
        description: "Neutral-grip dumbbell curl targeting biceps brachii, brachialis, and brachioradialis.",
        instructions: "Hold dumbbells with palms facing each other, curl upward maintaining neutral grip."
    },
    {
        name: "Push-up",
        category: "Strength",
        bodyPart: "Chest",
        description: "Calisthenic upper body push targeting chest, shoulders, and triceps.",
        instructions: "Start in high plank, lower body until chest nearly touches floor, press back up while maintaining straight back."
    },
    {
        name: "Dumbbell Pullover",
        category: "Strength",
        bodyPart: "Chest",
        description: "Isolation movement stretching pectorals and lats over the bench.",
        instructions: "Lie back across bench, hold dumbbell overhead with both hands, lower it behind head under control, pull back to vertical."
    },
    {
        name: "Preacher Curl",
        category: "Strength",
        bodyPart: "Arms",
        description: "Biceps curl isolation preventing momentum using a slanted bench support.",
        instructions: "Rest upper arms on preacher pad, curl barbell or dumbbells upward, focusing on biceps contraction."
    },

    // === GYM & STRENGTH (Lower Body) ===
    {
        name: "Back Squat",
        category: "Strength",
        bodyPart: "Legs",
        description: "The king of lower body movements targeting quadriceps, glutes, hamstrings, and core.",
        instructions: "Rest barbell across upper traps, squat down by bending hips and knees until thighs are below parallel, drive back up."
    },
    {
        name: "Front Squat",
        category: "Strength",
        bodyPart: "Legs",
        description: "Quad-dominant squat variant placing load on front shoulders.",
        instructions: "Hold barbell in front rack position, keep torso upright, squat down deep, drive upward."
    },
    {
        name: "Deadlift",
        category: "Strength",
        bodyPart: "Back",
        description: "Ultimate posterior chain compound movement lifting load from the floor.",
        instructions: "Stand with feet mid-bar, hinge at hips, grip bar, pull upward by driving legs into floor and extending hips to lock out."
    },
    {
        name: "Romanian Deadlift",
        category: "Strength",
        bodyPart: "Legs",
        description: "Hinge focus emphasizing hamstrings and glutes over quads.",
        instructions: "Hold bar at hips, lower slowly by pushing hips far back with a minimal knee bend, feel hamstring stretch, return."
    },
    {
        name: "Leg Press",
        category: "Strength",
        bodyPart: "Legs",
        description: "Machine based leg press allowing heavy lower body loading without spinal compression.",
        instructions: "Place feet on sled, release safety, lower sled toward chest, press upward avoiding knee lockout."
    },
    {
        name: "Walking Lunge",
        category: "Strength",
        bodyPart: "Legs",
        description: "Unilateral leg developer targeting balance, quads, and glutes.",
        instructions: "Step forward, lower hips until back knee nearly touches floor, step forward with trailing foot into next rep."
    },
    {
        name: "Leg Curl",
        category: "Strength",
        bodyPart: "Legs",
        description: "Machine based isolation specifically targeting the hamstring muscles.",
        instructions: "Lie or sit on machine, pull roller pad toward glutes, squeeze hamstrings, return under control."
    },
    {
        name: "Leg Extension",
        category: "Strength",
        bodyPart: "Legs",
        description: "Machine based isolation targeting the quadriceps.",
        instructions: "Sit on extension machine, extend legs fully horizontally, squeeze quads, return slowly."
    },
    {
        name: "Calf Raise",
        category: "Strength",
        bodyPart: "Legs",
        description: "Ankle extension isolating gastrocnemius or soleus muscles.",
        instructions: "Stand on elevated edge, lower heels for deep stretch, press upward onto tip-toes forcefully."
    },
    {
        name: "Bulgarian Split Squat",
        category: "Strength",
        bodyPart: "Legs",
        description: "Rear-foot elevated unilateral squat heavily loading the front leg.",
        instructions: "Place one foot back on bench, squat down with front leg until front thigh is parallel to floor."
    },
    {
        name: "Glute Ham Raise",
        category: "Strength",
        bodyPart: "Legs",
        description: "Posterior chain developer utilizing bodyweight resistance.",
        instructions: "Anchor ankles, lower torso forward under control using hamstrings and glutes, pull back up to vertical."
    },
    {
        name: "Hip Thrust",
        category: "Strength",
        bodyPart: "Legs",
        description: "Barbell loaded pelvic bridge isolating glute max.",
        instructions: "Rest upper back on bench, place barbell on hips, drive hips up dynamically squeezing glutes at peak."
    },

    // === GYM & STRENGTH (Core) ===
    {
        name: "Plank",
        category: "Strength",
        bodyPart: "Core",
        description: "Isometric core hold strengthening trans-versus abdominis.",
        instructions: "Support weight on forearms and toes, keep body straight, brace core, hold static position."
    },
    {
        name: "Hanging Leg Raise",
        category: "Strength",
        bodyPart: "Core",
        description: "Hang from bar and lift legs, targeting lower rectus abdominis.",
        instructions: "Hang from pullup bar, raise straight legs to horizontal using core, lower slowly without swinging."
    },
    {
        name: "Russian Twist",
        category: "Strength",
        bodyPart: "Core",
        description: "Rotational core exercise targeting obliques.",
        instructions: "Sit with knees bent, lean back slightly, rotate torso side-to-side tapping floor or holding weight."
    },
    {
        name: "Ab Wheel Rollout",
        category: "Strength",
        bodyPart: "Core",
        description: "Advanced anti-extension core roll.",
        instructions: "Kneel, roll ab wheel forward as far as possible without sagging lower back, pull back using abs."
    },
    {
        name: "Woodchopper",
        category: "Strength",
        bodyPart: "Core",
        description: "Cable rotational movement simulating a wood-chopping swing.",
        instructions: "Hold cable with both hands, pull diagonally across body from high to low, rotating torso."
    },

    // === ARCHERY & TARGET SHOOTING ===
    {
        name: "Bow Draw Resistance Holds",
        category: "Archery",
        bodyPart: "Shoulders",
        description: "Isometric strength drill to increase draw-weight endurance.",
        instructions: "Draw bow or resistance band to full anchor, hold position statically for 15-30 seconds, relax, repeat."
    },
    {
        name: "Release Technique Drill",
        category: "Archery",
        bodyPart: "Fingers",
        description: "Focuses on clean release execution without string deflection.",
        instructions: "Stand at blank bale, draw, focus entirely on relaxing fingers or release aid back tension, let shot fire cleanly."
    },
    {
        name: "Anchor Point Consistency Drills",
        category: "Archery",
        bodyPart: "Face",
        description: "Proprioception training to lock in identical draw placement.",
        instructions: "Draw bow eyes closed, find your anchor points (string to nose, knuckle to jaw), open eyes, verify sight alignment."
    },
    {
        name: "Blank Bale Shooting",
        category: "Archery",
        bodyPart: "Full Body",
        description: "Close-up target-free shooting to build automated shot cycles.",
        instructions: "Stand 5 meters from target with no target face, execute shot cycle focusing purely on muscle feel."
    },
    {
        name: "Target Face Alignment Holds",
        category: "Archery",
        bodyPart: "Back",
        description: "Draw holds while aiming at a target to build target panic resistance.",
        instructions: "Draw bow, align sight pin with target center, hold aiming for 10 seconds without releasing, let down."
    },
    {
        name: "Elastic Band Draw Training",
        category: "Archery",
        bodyPart: "Shoulders",
        description: "Warm-up and scapular retraction movement using bands.",
        instructions: "Hold stretch band, draw it exactly replicating bow shot mechanics, feel shoulder blades squeeze together."
    },
    {
        name: "Bow Arm Stabilization Drill",
        category: "Archery",
        bodyPart: "Shoulders",
        description: "Isometric hold targeting front deltoid stability during aiming.",
        instructions: "Hold dumbbell or bow out in aiming position statically for 45-60 seconds, maintaining vertical posture."
    },
    {
        name: "Single-Leg Stance Balance Hold",
        category: "Archery",
        bodyPart: "Core",
        description: "Core stability drill to minimize body sway during shot execution.",
        instructions: "Stand on one leg, close eyes, hold balance for 30 seconds. Repeat on opposite side."
    },
    {
        name: "Back Tension Activation Hold",
        category: "Archery",
        bodyPart: "Scapula",
        description: "Focuses on loading drawing load onto rhomboids and traps.",
        instructions: "Draw to anchor, initiate expansion phase by squeezing drawing shoulder blade inwards to trigger shot."
    },
    {
        name: "Sight Pin Settling Drill",
        category: "Archery",
        bodyPart: "Focus",
        description: "Teaches mind to accept minor pin float without jerking.",
        instructions: "Aim at target, watch pin float naturally, execute expansion smoothly without trying to hold pin perfectly still."
    },
    {
        name: "Shot Cycle Execution Loop",
        category: "Archery",
        bodyPart: "Full Body",
        description: "Structured rehearsal of all 12 stages of the shot cycle.",
        instructions: "Go through stance, hook, grip, mind check, setup, draw, anchor, aim, expansion, release, follow-through."
    },
    {
        name: "Arrow Pulling Safety Hold",
        category: "Archery",
        bodyPart: "Arms",
        description: "Correct biomechanics to pull arrows safely without bending them.",
        instructions: "Place one hand flat on target, grip arrow close to target face with other hand, pull straight out."
    },

    // === CARDIO & ENDURANCE ===
    {
        name: "Treadmill Run",
        category: "Cardio",
        bodyPart: "Full Body",
        description: "Running protocol targeting cardiorespiratory endurance.",
        instructions: "Set speed and incline on treadmill, maintain upright running posture, land midfoot."
    },
    {
        name: "Rowing Ergometer",
        category: "Cardio",
        bodyPart: "Full Body",
        description: "Full body pulling endurance movement.",
        instructions: "Push with legs, lean back slightly, pull handle to lower ribs, extend arms, return forward."
    },
    {
        name: "Stationary Cycling",
        category: "Cardio",
        bodyPart: "Legs",
        description: "Low impact aerobic capacity training.",
        instructions: "Maintain a cadence of 80-100 RPM, keep core engaged, adjust resistance as programmed."
    },
    {
        name: "Elliptical Trainer",
        category: "Cardio",
        bodyPart: "Full Body",
        description: "Aerobic training minimizing joint impact.",
        instructions: "Grip handles, glide legs in smooth elliptical path, push/pull with arms to engage upper body."
    },
    {
        name: "Jump Rope",
        category: "Cardio",
        bodyPart: "Full Body",
        description: "High velocity coordination and conditioning exercise.",
        instructions: "Jump on balls of feet, keep elbows tucked to sides, rotate rope using wrist movement only."
    },
    {
        name: "Stair Climber",
        category: "Cardio",
        bodyPart: "Legs",
        description: "Glute and quad burning aerobic conditioning.",
        instructions: "Step upward dynamically, keep chest up, avoid leaning heavily on side handrails."
    },
    {
        name: "Outdoor Trail Run",
        category: "Cardio",
        bodyPart: "Full Body",
        description: "Varying terrain cardiovascular run.",
        instructions: "Run on dirt/gravel trail, adapt stride length to incline and declivity terrain changes."
    },
    {
        name: "Swimming Laps",
        category: "Cardio",
        bodyPart: "Full Body",
        description: "Total body aquatic resistance cardio.",
        instructions: "Perform front crawl, breaststroke, or backstroke laps at sustained steady-state pace."
    },
    {
        name: "Kettlebell Swings",
        category: "Cardio",
        bodyPart: "Full Body",
        description: "Ballistic posterior chain conditioning.",
        instructions: "Hinge at hips, swing kettlebell back between legs, drive hips forward explosively to swing KB to eye level."
    },
    {
        name: "Burpees",
        category: "Cardio",
        bodyPart: "Full Body",
        description: "High-intensity full body conditioning builder.",
        instructions: "Drop to squat, kick feet back, do pushup, jump feet back under hips, leap into air clapping overhead."
    },
    {
        name: "Mountain Climbers",
        category: "Cardio",
        bodyPart: "Core",
        description: "Rapid plank knee drives.",
        instructions: "Hold pushup position, drive knees to chest alternating rapidly while keeping hips level."
    },
    {
        name: "Battle Ropes",
        category: "Cardio",
        bodyPart: "Arms",
        description: "Upper body anaerobic power endurance waves.",
        instructions: "Slam heavy ropes up and down rapidly to create continuous wave patterns, staying in quarter squat."
    },
    {
        name: "Assault Bike Sprint",
        category: "Cardio",
        bodyPart: "Full Body",
        description: "High intensity maximum effort calorie intervals.",
        instructions: "Pedal and push/pull handles with maximum effort to generate target wattages."
    },
    {
        name: "Box Jumps",
        category: "Cardio",
        bodyPart: "Legs",
        description: "Explosive plyometric vertical power.",
        instructions: "Squat down, leap onto box landing softly in deep squat, step down, repeat."
    },

    // === MOBILITY, REHAB & FLEXIBILITY ===
    {
        name: "Foam Rolling (Lats & Quads)",
        category: "Mobility",
        bodyPart: "Full Body",
        description: "Myofascial release to reduce muscle soreness and trigger points.",
        instructions: "Rest target muscle group on foam roller, apply bodyweight, roll slowly finding tight areas, hold 20s."
    },
    {
        name: "Banded Shoulder Dislocates",
        category: "Mobility",
        bodyPart: "Shoulders",
        description: "Rotational shoulder mobility stretch.",
        instructions: "Hold resistance band wide, rotate straight arms overhead and behind back, return forward."
    },
    {
        name: "Cat-Cow Stretch",
        category: "Mobility",
        bodyPart: "Back",
        description: "Spinal flexion and extension warmup.",
        instructions: "Get on all fours, arch back up towards ceiling (Cat), then drop belly and lift head towards ceiling (Cow)."
    },
    {
        name: "Cobra Stretch",
        category: "Mobility",
        bodyPart: "Core",
        description: "Abdominal and lower back stretching.",
        instructions: "Lie face down, press hands into floor under shoulders, extend arms fully to lift chest off floor."
    },
    {
        name: "World's Greatest Stretch",
        category: "Mobility",
        bodyPart: "Full Body",
        description: "Multi-joint thoracic, hip flexor, and hamstring mobility flow.",
        instructions: "Lunge forward, place hands inside front foot, rotate upper body reaching one hand to ceiling, stretch hamstring."
    },
    {
        name: "Deep Squat Hold",
        category: "Mobility",
        bodyPart: "Legs",
        description: "Deep passive hip and ankle mobility opener.",
        instructions: "Squat down fully, rest weight in bottom position statically for 1-2 minutes keeping heels flat."
    },
    {
        name: "Hip Flexor Stretch",
        category: "Mobility",
        bodyPart: "Legs",
        description: "Passive stretch for tight psoas muscles.",
        instructions: "Kneel on one knee, push hips forward slightly until stretch is felt in front of trailing hip."
    },
    {
        name: "Child's Pose",
        category: "Mobility",
        bodyPart: "Back",
        description: "Relaxing lower back and lat stretch.",
        instructions: "Kneel, sit back on heels, fold torso forward resting forehead on floor and reaching arms far forward."
    },
    {
        name: "Dead Hang",
        category: "Mobility",
        bodyPart: "Shoulders",
        description: "Passive shoulder and spinal decompression hold.",
        instructions: "Hang passively from pullup bar, relax shoulder blades, hold statically for grip and lat stretch."
    },
    {
        name: "Y-T-W Scapular Raises",
        category: "Mobility",
        bodyPart: "Back",
        description: "Scapular motor control and shoulder health warmup.",
        instructions: "Lie face down, raise arms to form Y, then T, then W shapes squeezing shoulder blades."
    },
    {
        name: "Thoracic Spine Rotation",
        category: "Mobility",
        bodyPart: "Back",
        description: "Mid-back rotational mobilization.",
        instructions: "On all fours, place one hand behind head, rotate elbow up toward ceiling, follow with eyes."
    },

    // === OTHER SPORTS & ATHLETICS ===
    {
        name: "Shadow Boxing",
        category: "Combat",
        bodyPart: "Full Body",
        description: "Boxing conditioning and coordination drills against air.",
        instructions: "Maintain guard stance, throw punches, pivot feet, duck and slip punches while moving continuously."
    },
    {
        name: "Heavy Bag Punching",
        category: "Combat",
        bodyPart: "Full Body",
        description: "Power endurance strike conditioning.",
        instructions: "Wrap hands, throw punch combinations at heavy bag, keeping wrist straight and striking with front knuckles."
    },
    {
        name: "Single Leg Calf Hops",
        category: "Athletics",
        bodyPart: "Legs",
        description: "Ankle stiffness and reactive strength plyometric.",
        instructions: "Hop vertically on one leg using ankle extension only, minimizing contact time on floor."
    },
    {
        name: "Medicine Ball Slams",
        category: "Athletics",
        bodyPart: "Full Body",
        description: "Explosive triple extension slamming power.",
        instructions: "Raise medicine ball fully overhead, slam it down into floor between feet with maximum core contraction."
    },
    {
        name: "Standing Broad Jump",
        category: "Athletics",
        bodyPart: "Legs",
        description: "Horizontal lower body power.",
        instructions: "Swing arms back, hinge, leap forward horizontally landing softly on both feet in squat."
    },
    {
        name: "Agility Ladder Footwork",
        category: "Athletics",
        bodyPart: "Legs",
        description: "Speed, coordination, and footwork agility drills.",
        instructions: "Step rapidly in and out of ladder rungs using balls of feet, maintaining low center of gravity."
    },
    {
        name: "Pool Flutter Kicks",
        category: "Swimming",
        bodyPart: "Legs",
        description: "Aquatic leg kick speed drill.",
        instructions: "Hold pool edge or kickboard, kick legs rapidly from hips with ankles relaxed and toes pointed."
    },
    {
        name: "Dryland Swim Streamline Holds",
        category: "Swimming",
        bodyPart: "Full Body",
        description: "Core and posture hold for swim streamline profile.",
        instructions: "Lie face down, extend hands forward overlapping palms, squeeze ears with arms, lift chest and legs."
    },
    {
        name: "Speed Sprints",
        category: "Athletics",
        bodyPart: "Legs",
        description: "Maximum velocity running sprint.",
        instructions: "Sprint at 100% effort over 30-60m distances, focusing on high knee drive and arm drive."
    },
    {
        name: "Lateral Shuffles",
        category: "Athletics",
        bodyPart: "Legs",
        description: "Lateral plane agility and groin warmup.",
        instructions: "Lower into athletic stance, shuffle sideways rapidly without crossing feet."
    },
    {
        name: "Farmer's Walk",
        category: "Strength",
        bodyPart: "Full Body",
        description: "Grip and trap carry strength conditioning.",
        instructions: "Pick up heavy dumbbells or trap bar, walk forward using short quick strides keeping posture straight."
    },
    {
        name: "Dumbbell Snatch",
        category: "Strength",
        bodyPart: "Full Body",
        description: "Unilateral explosive power lift.",
        instructions: "Pull dumbbell from floor, pull elbow high, catch dumbbell overhead in a quarter squat, stand up."
    },
    {
        name: "Clean & Jerk",
        category: "Strength",
        bodyPart: "Full Body",
        description: "Olympic weightlifting double movement lift.",
        instructions: "Clean barbell to front shoulders, then dip legs and drive bar overhead splitting legs to catch."
    },
    {
        name: "Snatch",
        category: "Strength",
        bodyPart: "Full Body",
        description: "Explosive Olympic lift elevating load from floor to overhead in one movement.",
        instructions: "Grip bar wide, pull explosively, pull yourself under bar to catch overhead in deep squat, stand."
    },
    {
        name: "Wall Balls",
        category: "Cardio",
        bodyPart: "Full Body",
        description: "Metabolic conditioning squat-press throw.",
        instructions: "Hold med ball at chest, squat down deep, press up explosively throwing ball to 10ft target on wall."
    },
    {
        name: "Sled Push (Prowler)",
        category: "Strength",
        bodyPart: "Full Body",
        description: "Concentric-only lower body push conditioning.",
        instructions: "Grip sled uprights low, lean forward, push sled forward with driving footsteps."
    },
    {
        name: "Turkish Get-up",
        category: "Mobility",
        bodyPart: "Full Body",
        description: "Highly complex shoulder stability and rotational mobility sequence.",
        instructions: "Lie down with kettlebell pressed overhead, stand up holding KB overhead throughout, lie back down."
    }
];
