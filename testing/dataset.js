  // test data set
  // is exported at the end of the file
  const dataset = [
[
  "test_Psoriasis_0",
  "Psoriasis",
  "I have been experiencing a skin rash on my arms, legs, and torso for the past few weeks. It is red, itchy, and covered in dry, scaly patches."
],
[
  "test_Psoriasis_1",
  "Psoriasis",
  "My skin has been peeling, especially on my knees, elbows, and scalp. This peeling is often accompanied by a burning or stinging sensation."
],
[
  "test_Psoriasis_2",
  "Psoriasis",
  "I have been experiencing joint pain in my fingers, wrists, and knees. The pain is often achy and throbbing, and it gets worse when I move my joints."
],
[
  "test_Psoriasis_3",
  "Psoriasis",
  "There is a silver like dusting on my skin, especially on my lower back and scalp. This dusting is made up of small scales that flake off easily when I scratch them.'       
],
[
  "test_Psoriasis_4",
  "Psoriasis",
  "My nails have small dents or pits in them, and they often feel inflammatory and tender to the touch. Even there are minor rashes on my arms."
],
[
  "test_Psoriasis_5",
  "Psoriasis",
  "The skin on my palms and soles is thickened and has deep cracks. These cracks are painful and bleed easily."
],
[
  "test_Psoriasis_6",
  "Psoriasis",
  "The skin around my mouth, nose, and eyes is red and inflamed. It is often itchy and uncomfortable. There is a noticeable inflammation in my nails."
],
[
  "test_Psoriasis_7",
  "Psoriasis",
  "My skin is very sensitive and reacts easily to changes in temperature or humidity. I often have to be careful about what products I use on my skin."
],
[
  "test_Psoriasis_8",
  "Psoriasis",
  "I have noticed a sudden peeling of skin at different parts of my body, mainly arms, legs and back. Also, I face severe joint pain and skin rashes."
],
[
  "test_Psoriasis_9",
  "Psoriasis",
  "The skin on my genitals is red and inflamed. It is often itchy, burning, and uncomfortable. There are rashes on different parts of the body too."
],
[
  "test_Psoriasis_10",
  "Psoriasis",
  "I have experienced fatigue and a general feeling of malaise. I often feel tired and have a lack of energy, even after a good night's sleep."
],
[
  "test_Psoriasis_11",
  "Psoriasis",
  "The rash on my skin has spread to other parts of my body, including my chest and abdomen. It is itchy and uncomfortable, and it is often worse at night. I am also facing skin peeling."
],
[
  "test_Psoriasis_12",
  "Psoriasis",
  "The rash on my skin is worse in the winter months when the air is dry. I find that I have to moisturize more frequently and use humidifiers to keep my skin hydrated.'      
],
[
  "test_Psoriasis_13",
  "Psoriasis",
  "I have experienced difficulty sleeping due to the itching and discomfort caused by the rash. There are small dents in my nails, which is really concerning."
],
[
  "test_Psoriasis_14",
  "Psoriasis",
  "My skin is prone to infections due to dry, flaky patches. I am experiencing a strong pain in my joints. The skin on my knees and elbows is starting to peel off."
],
[
  "test_Psoriasis_15",
  "Psoriasis",
  "I am starting to have rashes on my skin. The rash often bleeds when I scratch or rub it. Moreover, I have noticed small dents in my nails."
],
[
  "test_Psoriasis_16",
  "Psoriasis",
  "I have noticed that my skin has become more sensitive than it used to be. There is a silver like dusting on my skin, especially on my back and elbows."
],
[
  "test_Psoriasis_17",
  "Psoriasis",
  "I am worried about the constant peeling of the skin on my palm, elbow and knee. I have developed rashes on my arms, which itch if I touch them. All of these are making my life quite discomforting and miserable."
],
[
  "test_Psoriasis_18",
  "Psoriasis",
  "There is strange pain in my joints. Also, I have noticed strange peeling of skin in different parts of my body. I am afraid there is something wrong going on with my body.'],
[
  "test_Psoriasis_19",
  "Psoriasis",
  "My nails have small dents on them. Even my joints have started to pain severely. There is a silver like dusting on my skin, particularly in my back."
],
[
  "test_Psoriasis_20",
  "Psoriasis",
  "The rashes on my skin are not healing. Moreover, I have noticed a sudden peeling of the skin, especially the skin on my elbows and knees. I am really worried about this.'  
],
[
  "test_Psoriasis_21",
  "Psoriasis",
  "For the past few weeks, I've had a skin rash on my arms, legs, and chest. It's red and irritating, with dry, scaly spots. I have a strange pain in my joints too."
],
[
  "test_Psoriasis_22",
  "Psoriasis",
  "My skin is peeling, particularly on my knees, elbows, and scalp. This peeling is frequently accompanied by a stinging or burning feeling."
],
[
  "test_Psoriasis_23",
  "Psoriasis",
  "I'm having joint discomfort in my fingers, wrists, and knees. The pain is frequently aching and throbbing, and it worsens when I move my joints."
],
[
  "test_Psoriasis_24",
  "Psoriasis",
  "My skin has a silvery film, particularly on my back, arms and scalp. This dusting is composed of tiny scales that easily peel off when scratched."
],
[
  "test_Psoriasis_25",
  "Psoriasis",
  "I have red and inflammatory skin around my mouth, nose, and eyes. It is frequently irritating and unpleasant. Recently, it has got very painful."
],
[
  "test_Psoriasis_26",
  "Psoriasis",
  "My skin is extremely sensitive and quickly irritated by changes in temperature or humidity. My nails have developed dents on them. I am worried about this sudden change.'  
],
[
  "test_Psoriasis_27",
  "Psoriasis",
  "I've seen a sudden peeling of skin on various regions of my body, mostly my arms, legs, and back. In addition, I have significant joint pain and skin rashes. The rash is spreading to different parts of my body."
],
[
  "test_Psoriasis_28",
  "Psoriasis",
  "My genital skin is red and irritated. It is frequently irritating, burning, and unpleasant. There are also rashes in various places of the body. Also, I have a strange pain in my joints."
],
[
  "test_Psoriasis_29",
  "Psoriasis",
  "I've had trouble sleeping because of the itching and pain produced by the rash. My nails have little dents, which is really alarming. There is a noticeable inflammation in my nails."
],
[
  "test_Psoriasis_30",
  "Psoriasis",
  "Because of dry, flaky areas on my skin, I am prone to infections. My joints are in excruciating agony. The skin on my knees and elbows is beginning to flake."
],
[
  "test_Psoriasis_31",
  "Psoriasis",
  "My skin is breaking out in rashes. When I scratch or rub the rash, it frequently bleeds. In addition, I've observed little dents in my nails. There is a noticeable inflammation in my nails."
],
[
  "test_Psoriasis_32",
  "Psoriasis",
  "I've observed that my skin is more sensitive now than it used to be. My skin has a silvery film, especially on my back and elbows."
],
[
  "test_Psoriasis_33",
  "Psoriasis",
  "My palms and soles have grown and developed severe fissures. These cracks are unpleasant and frequently bleed. Also, the skin is starting to peel off."
],
[
  "test_Psoriasis_34",
  "Psoriasis",
  "My nails are starting to have small pits on them. I am worried and don't know what is causing it. Also, my joints pain and there are rashes on my arms and back."
],
[
  "test_Psoriasis_35",
  "Psoriasis",
  "There is a silver like dusting on my skin. Moreover, the skin on my arms and back are starting to peel off. This is strange and really concerning me."
],
[
  "test_Psoriasis_36",
  "Psoriasis",
  "My skin rash has extended to other areas of my body, including my chest and belly. It is irritating and unpleasant, and it is frequently worst at night. I'm also experiencing skin flaking."
],
[
  "test_Psoriasis_37",
  "Psoriasis",
  "My skin rash gets worse in the winter when the air is dry. To keep my skin moisturized, I have to moisturize more regularly and use humidifiers. I am also facing joint pain."
],
[
  "test_Psoriasis_38",
  "Psoriasis",
  "I've had trouble sleeping because of the itching and pain produced by the rash. My nails have little dents. I am also experiencing skin peeling in different parts of my body."
],
[
  "test_Psoriasis_39",
  "Psoriasis",
  "My skin is peeling in places, especially on my knees, elbows, and arms. This peeling is often accompanied by a painful or burning sensation. I am also developing small dents on my nails, which is really concerning."
],
[
  "test_Psoriasis_40",
  "Psoriasis",
  "My skin has a silvery layer over it, especially on my back and arms. This dusting is made up of small scales that peel off readily when rubbed. Also, there are rashes all over my body."
],
[
  "test_Psoriasis_41",
  "Psoriasis",
  "My arms, face and back are all red and irritated. It is frequently irritating and unpleasant. My nails have a strange inflammation and have developed small dents. I have never seen anything like this."
],
[
  "test_Psoriasis_42",
  "Psoriasis",
  "I've had trouble sleeping because of the itching and pain produced by the rash. My nails have little dents, which is really alarming. Moreover, my joints pain everyday and I have no idea what is causing it."
],
[
  "test_Psoriasis_43",
  "Psoriasis",
  "My fingers and soles have pretty thick skin that is cracked severely. These fractures hurt and bleed frequently. The fractures are itchy and covered with scales."
],
[
  "test_Psoriasis_44",
  "Psoriasis",
  "My skin has changed from being less sensitive to being more sensitive. My skin has a silvery coating, especially on my back, elbows and knees."
],
[
  "test_Psoriasis_45",
  "Psoriasis",
  "My nails are slightly dented. Even my joints are now experiencing excruciating discomfort. My skin has a silver-like powder, especially on my back and elbows. "
],
[
  "test_Psoriasis_46",
  "Psoriasis",
  "I've had trouble falling asleep because of the rash's pain and itching. The skin on my fingers are starting to peel off. My nails have a few tiny cracks, which is really worrying. "
],
[
  "test_Psoriasis_47",
  "Psoriasis",
  "My joints are experiencing an unusual discomfort. Additionally, I've experienced weird skin peeling in various places on my body. I'm concerned that something is wrong with my body. "
],
[
  "test_Psoriasis_48",
  "Psoriasis",
  "I am starting to have rashes on my arms and neck. The rash often bleeds and hurts when I scratch it. I have also developed small dents in my nails, which is very strange.' 
],
[
  "test_Psoriasis_49",
  "Psoriasis",
  "Because of dry, flaky areas on my skin, I am prone to infections. My joints are in extreme pain . My knees and elbows' skin are starting to peel off."
],
[
  "test_Varicose Veins_50",
  "Varicose Veins",
  "I have a rash on my legs that is causing a lot of discomforts. It seems there is a cramp and I can see prominent veins on the calf. Also, I have been feeling very tired and fatigued in the past couple of days."
],
[
  "test_Varicose Veins_51",
  "Varicose Veins",
  "My calves have been cramping up when I walk or stand for long periods of time. There are bruise marks on my calves, which is making me worried. I feel tired very soon.'    
],
[
  "test_Varicose Veins_52",
  "Varicose Veins",
  "There is bruising on my legs that I cannot explain. I can see strange blood vessels below the skin. Also, I am slightly obese and I am really worried."
],
[
  "test_Varicose Veins_53",
  "Varicose Veins",
  "I am overweight and have noticed that my legs are swollen and the blood vessels are visible. My legs have swollen and I can see a stream of swollen veins on my calves.'    
],
[
  "test_Varicose Veins_54",
  "Varicose Veins",
  "The veins on my calves have become very prominent and causing discomfort. I can't stand for long periods of time, as it causes pain in my legs, similar to cramps."
],
[
  "test_Varicose Veins_55",
  "Varicose Veins",
  "The skin around the veins on my legs is red and inflamed. I believe I can see some of the swollen blood vessels. I am really worried about it."
],
[
  "test_Varicose Veins_56",
  "Varicose Veins",
  "Standing or walking for long periods of time causes a lot of pain in my legs. I get cramps upon doing physical activities. There are bruise marks on my legs too."
],
[
  "test_Varicose Veins_57",
  "Varicose Veins",
  "The cramps in my calves are making it difficult for me to walk. I feel fatigued after working for some time. I believe obesity is the reason behind this."
],
[
  "test_Varicose Veins_58",
  "Varicose Veins",
  "The swelling in my legs has gotten worse over the past few weeks. Now, a large number of veins are noticeable on my calves, which is making me worried."
],
[
  "test_Varicose Veins_59",
  "Varicose Veins",
  "The veins on my legs are very noticeable and cause me discomfort. It seems like there is a major bruise and I get cramps when I run."
],
[
  "test_Varicose Veins_60",
  "Varicose Veins",
  "The skin on my calves has become inflamed and red. My legs hurt if I try to run or do any physical activities."
],
[
  "test_Varicose Veins_61",
  "Varicose Veins",
  "Recently, the pain in my calves has been constant and becomes worse when I stand or walk for long periods of time. My legs have started to swell and also some blood vessels are quite noticeable."
],
[
  "test_Varicose Veins_62",
  "Varicose Veins",
  "The veins in my legs are causing discomfort and difficulty sleeping at night. I have no idea why it is happening. I get cramps when I sprint."
],
[
  "test_Varicose Veins_63",
  "Varicose Veins",
  "The swelling in my legs is causing me to have difficulty fitting into my shoes. I can't sprint or stand for long periods of time. I can see some swollen blood vessels."    
],
[
  "test_Varicose Veins_64",
  "Varicose Veins",
  "I have noticed cramps in my calves are becoming more frequent and intense. It is causing me a lot of discomforts. I am also overweight and my legs have started to swell.'  
],
[
  "test_Varicose Veins_65",
  "Varicose Veins",
  "The veins on my legs cause a lot of discomforts when I sit for long periods of time."
],
[
  "test_Varicose Veins_66",
  "Varicose Veins",
  "The rash on my legs is spreading and becoming more severe. It has become very difficult for me to run."
],
[
  "test_Varicose Veins_67",
  "Varicose Veins",
  "My legs are causing a lot of discomforts when I exercise. I get frequent cramps and the blood vessels have become quite noticeable."
],
[
  "test_Varicose Veins_68",
  "Varicose Veins",
  "The prominent blood vessels on my calves are causing self-consciousness and embarrassment. I believe the problem is because of my overweight."
],
[
  "test_Varicose Veins_69",
  "Varicose Veins",
  "The skin around the veins on my legs is dry and flaky. It seems there is a major bruise and my legs have started to swell."
],
[
  "test_Varicose Veins_70",
  "Varicose Veins",
  "I have been experiencing a rash on my legs that is causing a lot of irritation and discomfort. It is red and inflamed and appears to be spreading."
],
[
  "test_Varicose Veins_71",
  "Varicose Veins",
  "Recently, my calves have been cramping up frequently, especially when I am walking or standing for long periods of time. Also, the veins are very noticeable."
],
[
  "test_Varicose Veins_72",
  "Varicose Veins",
  "I have noticed that there are bruises on my legs that I cannot explain. They are not painful but are concerning to me."
],
[
  "test_Varicose Veins_73",
  "Varicose Veins",
  "As I am overweight, I have noticed that my legs are swollen and the blood vessels are more visible than usual. The swelling seems to be getting worse over time."
],
[
  "test_Varicose Veins_74",
  "Varicose Veins",
  "The veins on my calves are very prominent and are causing me a lot of discomforts. They are swollen and protrude from my skin."
],
[
  "test_Varicose Veins_75",
  "Varicose Veins",
  "The skin around the veins on my legs is red, inflamed, and itchy. It is causing a lot of discomforts and I am starting to get regular cramps."
],
[
  "test_Varicose Veins_76",
  "Varicose Veins",
  "Standing or walking for long periods of time has been causing a lot of pain in my legs. It feels like a cramp and becomes worse the longer I am on my feet."
],
[
  "test_Varicose Veins_77",
  "Varicose Veins",
  "The cramps in my calves have been making it difficult for me to walk and do my daily activities. They come on suddenly and last for several minutes."
],
[
  "test_Varicose Veins_78",
  "Varicose Veins",
  "The swelling in my legs has gotten worse over the past few weeks and is causing me difficulty fitting into my shoes. It is also causing discomfort when I sit for long periods of time."
],
[
  "test_Varicose Veins_79",
  "Varicose Veins",
  "The veins on my legs are very noticeable and are causing me a lot of discomforts. They are swollen and protrude from my skin, making them visible through my clothing.'     
],
[
  "test_Varicose Veins_80",
  "Varicose Veins",
  "The skin on my calves is itchy and inflamed, causing a lot of discomfort and difficulty sleeping at night. The blood vessels have started to protrude out, which is concerning."
],
[
  "test_Varicose Veins_81",
  "Varicose Veins",
  "The pain in my calves is constant and becomes worse when I stand or walk for long periods of time. I am getting constant cramps and can't run for longer periods of time."  
],
[
  "test_Varicose Veins_82",
  "Varicose Veins",
  "The veins in my legs are causing discomfort and difficulty sleeping at night. They are swollen and protruding from my skin, making them noticeable and painful."
],
[
  "test_Varicose Veins_83",
  "Varicose Veins",
  "The swelling in my legs is causing me to have difficulty fitting into my shoes and is causing discomfort when I sit for long periods of time."
],
[
  "test_Varicose Veins_84",
  "Varicose Veins",
  "The cramps in my calves are becoming more frequent and intense, making it difficult for me to walk and do my daily activities."
],
[
  "test_Varicose Veins_85",
  "Varicose Veins",
  "The veins on my legs are causing a lot of discomforts when I sit for long periods of time. They are swollen and protruding from my skin, making them painful and noticeable."
],
[
  "test_Varicose Veins_86",
  "Varicose Veins",
  "The rash on my legs is spreading and becoming more severe. It is red, inflamed, and itchy, causing a lot of discomfort and difficulty sleeping at night."
],
[
  "test_Varicose Veins_87",
  "Varicose Veins",
  "My legs have been causing a lot of discomforts when I exercise. They feel heavy and swollen, and the veins are prominent and painful. I feel fatigued all the time.'        
],
[
  "test_Varicose Veins_88",
  "Varicose Veins",
  "The prominent veins on my calves are causing self-consciousness and embarrassment. They are swollen and protrude from my skin, making them very noticeable."
],
[
  "test_Varicose Veins_89",
  "Varicose Veins",
  "The skin around the veins on my legs is dry and flaky, causing discomfort and irritation. I am also starting to get frequent cramps."
],
[
  "test_Varicose Veins_90",
  "Varicose Veins",
  "I have a rash on my legs that is giving me a lot of pain. There appears to be a cramp, and I can see visible veins on the calf."
],
[
  "test_Varicose Veins_91",
  "Varicose Veins",
  "My veins of legs have become more visible and swollen than normal. They are visible through my skin and it hurts when I move."
],
[
  "test_Varicose Veins_92",
  "Varicose Veins",
  "Walking is tough for me because of cramps in my calves. Obesity, I believe, is the cause of this. After a while of working, I'm exhausted."
],
[
  "test_Varicose Veins_93",
  "Varicose Veins",
  "The blood vessels on my legs are quite visible and give me a lot of pain. They're large and protrude from my skin. It is unusual and I am worried about it."
],
[
  "test_Varicose Veins_94",
  "Varicose Veins",
  "I have noticed that the blood vessels in my legs are getting more noticeable than usual. It is a little concerning to me. Moreover, I am experiencing cramps every day.'    
],
[
  "test_Varicose Veins_95",
  "Varicose Veins",
  "My legs' swelling has become worse over the last couple of days. I can see the blood vessels protruding out of the skin. This is quite unusual."
],
[
  "test_Varicose Veins_96",
  "Varicose Veins",
  "Long durations of standing or walking have caused severe discomfort in my legs. It's a burning ache that gets worse the longer I'm on my feet."
],
[
  "test_Varicose Veins_97",
  "Varicose Veins",
  "My legs' skin around the veins is unusual. There appears to be a large bruise. Nowadays, I get frequent cramps when I sprint or run."
],
[
  "test_Varicose Veins_98",
  "Varicose Veins",
  "I am experiencing too many cramps in the last couple of days. I think something is not right. I believe there is a small bruise on my calves, but I am not sure about it.'  
],
[
  "test_Varicose Veins_99",
  "Varicose Veins",
  "The veins in my calves are protruding out quite unusually. I am worried about it. Also, I am overweight and I believe this is the reason behind all of this."
],
[
  "test_Typhoid_100",
  "Typhoid",
  "I have constipation and belly pain, and it's been really uncomfortable. The belly pain has been getting worse and is starting to affect my daily life. Moreover, I get chills every night, followed by a mild fever."
],
[
  "test_Typhoid_101",
  "Typhoid",
  "I've also had some diarrhea, which has been really unpleasant. It's been coming and going, and it's been accompanied by abdominal cramps and bloating."
],
[
  "test_Typhoid_102",
  "Typhoid",
  "I have been experiencing chills and fever, along with severe abdominal pain. I've been feeling really miserable overall, and I just can't seem to shake these symptoms."    
],
[
  "test_Typhoid_103",
  "Typhoid",
  "I've been having a lot of trouble keeping hydrated because of the vomiting and diarrhea. There is a mild fever along with constipation and headache."
],
[
  "test_Typhoid_104",
  "Typhoid",
  "I've lost a lot of weight in the past week because I haven't been able to eat much due to nausea and vomiting. This is followed by mild fever, headache and belly pain. I'm really concerned about my health."
],
[
  "test_Typhoid_105",
  "Typhoid",
  "The fatigue has been really uncomfortable, and I've had a lot of difficulties doing my usual activities. I've also been feeling really depressed and irritable. There is mild pain in the abdominal part too."
],
[
  "test_Dengue_294",
  "Dengue",
  "My whole body is paining a lot and I don’t feel like eating anything. I have mild fever and get chills every night. Also, there are some red spots developing on my back and neck."
],
[
  "test_Dengue_295",
  "Dengue",
  "My joints and back pain everyday. I feel like vomitting and this has made me very weak. Because of my body pain, I am not able to focus on my work and don’t feel like doing anything."
],
[
  "test_Dengue_296",
  "Dengue",
  "The body pain I have been feeling is extreme. I has lost my appetite and developed rashes on my arms and face. The back of my eyes pain a lot."
],
[
  "test_Dengue_297",
  "Dengue",
  "I have developed rashes on my body. I am also experiencing high fever along with chills and headache. My joints and back hurt and there is a strange pain in the back of my eyes."
],
[
  "test_Dengue_298",
  "Dengue",
  "I have been feeling nauseous and have a constant urge to vomit. I get high fever and chills every night and feel terrible because of this. Also, I feel I have lost my appetite."
],
[
  "test_Dengue_299",
  "Dengue",
  "There are rashes on my skin, which itch if I touch them. I don’t feel good as my joints pain whole day. At night, I have mild fever and get chills, because of which I can’t sleep too."
],
[
  "test_Fungal infection_0",
  "Fungal infection",
  "I have raised lumps, a rash that looks red and inflamed, discoloured areas of skin that are different colours from the rest of my skin, and itching on my skin."
],
[
  "test_Fungal infection_1",
  "Fungal infection",
  "All over my body, there has been a severe itching that has been followed by a red, bumpy rash. My skin also has a few darkened spots and a few tiny, nodular breakouts. It has been happening for several days and is becoming worse."
],
[
  "test_Fungal infection_2",
  "Fungal infection",
  "I've had a rash on my skin that looks like dischromic patches, and I also have a lot of nodular eruptions and really bad itching. During the previous week, it has become worse."
],
[
  "test_Fungal infection_3",
  "Fungal infection",
  "I've had a rash that won't go away and a bothersome itching on my skin. In addition, I've seen some color-different areas and bumps that resemble knots or lumps on my skin."
],
[
  "test_Fungal infection_4",
  "Fungal infection",
  "I have a rash all over my body, and I can't stop scratching because my skin is itchy. My skin also has a few spots where the hue is altered and some lumps and knot-like pimples."
],
[
  "test_Fungal infection_5",
  "Fungal infection",
  "Recently, my skin has been quite itchy, and I have a rash all over my body. My skin also has a few spots where the hue is altered and some lumps and knot-like pimples.'    
],
[
  "test_Fungal infection_6",
  "Fungal infection",
  "My skin has been itching a lot and developing a rash. Additionally, I have a few areas of my skin that are a different hue than the rest of it. Additionally, I have a few firm pimples or breakouts on my skin."
],
[
  "test_Fungal infection_7",
  "Fungal infection",
  "All over my body has been itching like crazy, and now there are red areas all over. Additionally, some of the patches have a different tone than my natural skin. And on my skin, there are these lumps or pimples that have developed."
],
[
  "test_Fungal infection_8",
  "Fungal infection",
  "My skin has been acting up recently, becoming extremely itchy and rashes-prone. Additionally, there are certain spots that deviate from my natural skin tone in terms of hue. And now my skin has these lumps or bumps that weren't there before."
],
[
  "test_Fungal infection_9",
  "Fungal infection",
  "On my arms and legs, I have a lot of red pimples and itchy skin. My skin also has a few odd-looking lesions. And occasionally there are bumps that are somewhat uncomfortable."
],
[
  "test_Fungal infection_10",
  "Fungal infection",
  "I have an itchy skin and lots of red bumps on my arms and legs. There are some weird looking spots on my skin too. And sometimes there are bumps that feel kind of hard.'   
],
[
  "test_Fungal infection_11",
  "Fungal infection",
  "Doctor, I have a really itchy rash on my skin and there are some weird spots that are a different color. There are also some bumps on my skin that look like little knots'  
],
[
  "test_Fungal infection_12",
  "Fungal infection",
  "Doctor, My skin is covered in a very uncomfortable rash, along with some odd patches of a different hue. My skin also has a few pimples that resemble little knots"
],
[
  "test_Fungal infection_13",
  "Fungal infection",
  "I have lots of itchy spots on my skin, and sometimes they turn red or bumpy. There are also some weird patches that are different colors than the rest of my skin, and sometimes I get these weird bumps that look like little balls."
],
[
  "test_Fungal infection_14",
  "Fungal infection",
  "My skin frequently develops itchy bumps that can occasionally turn red or rough. Aside from that, my skin occasionally develops strange pimples that resemble small balls and some odd spots that are a different hue from the rest of my skin."
],
[
  "test_Fungal infection_15",
  "Fungal infection",
  "Doctor, I have these red rashes that keep popping up and my skin is continuously itching. In addition, I've observed some odd color-different spots on my skin, as well as some little nodules on my skin that appear to be expanding."
],
[
  "test_Fungal infection_16",
  "Fungal infection",
  "I have been experiencing some really intense itching all over my body, along with redness and bumps on my skin. There are also these weird patches that are different colors than the rest of my skin, and sometimes I get these nodules that look like small bumps."
],
[
  "test_Fungal infection_17",
  "Fungal infection",
  "All over my body, I've been scratching so much that my skin has become red and developed pimples. Additionally, I occasionally get these nodules that resemble little pimples, as well as these strange patches that are a different hue from the rest of my skin."
],
[
  "test_Fungal infection_18",
  "Fungal infection",
  "I've been experiencing a lot of itching, which has been accompanied with a rash that appears to be growing worse over time. There are also certain areas of skin that are different colours from the rest, and I've spotted several lumps that resemble little nodes."
],
[
  "test_Fungal infection_19",
  "Fungal infection",
  "I've been having a lot of problems with itching, and it's been accompanied by a rash that seems to be getting worse over time. There are also some patches of skin that are different colors than the rest, and I've noticed some bumps that look like little nodes."
],
[
  "test_Fungal infection_20",
  "Fungal infection",
  "Doctor, My skin is covered in an uncomfortable rash and has a few odd patches of skin that are a different colour. There are a few pimples on my skin that resemble little knots."
],
[
  "test_Fungal infection_21",
  "Fungal infection",
  "I've been itching a lot, and it's been accompanied with a rash that looks to be getting worse over time. There are also some patches of skin that are different colours from the rest of the skin, as well as some lumps that resemble little nodes."
],
[
  "test_Fungal infection_22",
  "Fungal infection",
  "My skin has been acting up lately, becoming exceedingly itchy and prone to rashes. Furthermore, several patches differ from my normal skin tone in terms of colour. And now I have lumps or bumps on my skin that weren't there before."
],
[
  "test_Fungal infection_23",
  "Fungal infection",
  "A rash that appears to be developing throughout my skin has been accompanying my recent bouts of intense itching and discomfort. On my skin, I also have some dischromic spots and little lumps that seem to be appearing everywhere."
],
[
  "test_Fungal infection_24",
  "Fungal infection",
  "My skin always itches, and occasionally it becomes quite rough and red. In addition, I occasionally get little pimples that resemble tiny balls and certain spots that are a different colour from the rest of my skin. It severely irritates me and itches."
],
[
  "test_Fungal infection_25",
  "Fungal infection",
  "I have a lot of itching all over my skin, and sometimes it gets really red and bumpy. There are also some patches that are different colors than the rest of my skin, and sometimes I get these little bumps that look like little balls. It's really annoying and itchy."
],
[
  "test_Fungal infection_26",
  "Fungal infection",
  "I have a pretty irritating itch all over my body, and my skin also has a few red, bumpy areas. I've also had some pimples that resemble small balls and other spots that are a different colour than the rest of my skin. "
],
[
  "test_Fungal infection_27",
  "Fungal infection",
  "I've had a pretty uncomfortable itch all over my body, as well as red and bumpy areas on my skin. There are also certain patches of my skin that are a different hue than the rest of it, and I've had some pimples that resemble little balls."
],
[
  "test_Fungal infection_28",
  "Fungal infection",
  "I've been having this really annoying itch all over my body, and I have red and bumpy spots on my skin too. There are also some areas that are a different color than the rest of my skin, and I've had some bumps that look like little balls."
],
[
  "test_Fungal infection_29",
  "Fungal infection",
  "I've had a pretty uncomfortable itch all over my body, as well as red and bumpy areas on my skin. There are also certain patches of my epidermis with a distinct shade than the rest of it, and I've had some pimples that resemble little balls."
],
[
  "test_Fungal infection_30",
  "Fungal infection",
  "I've been really itchy lately and there are these rashy spots all over my skin. There are also some areas that look different in shade than the rest of my skin, and I've had some bumps that are kind of hard."
],
[
  "test_Fungal infection_31",
  "Fungal infection",
  "I've been quite itchy recently, and I have rashy patches all over my skin. There are also certain regions that are darker in colour than the rest of my skin, and I've got some firm lumps."
],
[
  "test_Fungal infection_32",
  "Fungal infection",
  "I've been rather itchy recently, and I have rashy blotches all over my skin. There are also certain regions that are more dark in color than the rest of my skin, and I've got some painful lumps."
],
[
  "test_Fungal infection_33",
  "Fungal infection",
  "Recently, I've been scratching myself a lot, and my skin is covered with rashy places. Additionally, I've had a few pimples that are rather firm, and there are certain spots on my body that have a different shade of brown than the rest of my skin."
],
[
  "test_Fungal infection_34",
  "Fungal infection",
  "My skin has been really itchy and there are these rashy spots all over. There are also some patches that look different in color than the rest of my skin, and I've had some bumps that are kind of hard."
],
[
  "test_Fungal infection_35",
  "Fungal infection",
  "My skin has been really scratchy, and there are rashes all over my body. I have some bumps that are quite firm, as well as some areas that are a darker shade from the rest of my skin. It's extremely unpleasant."
],
[
  "test_Fungal infection_36",
  "Fungal infection",
  "There are rashy areas all over my skin, which has been really irritating. Additionally, I have some bumps that are fairly firm and some patches that are a different colour from the rest of my skin."
],
[
  "test_Fungal infection_37",
  "Fungal infection",
  "Recently, I've been scratching myself a lot, and my skin is covered with rashy places. In addition, there are a few spots where my skin doesn't appear to be its usual shade, and I've experienced a few lumps that are quite painful."
],
[
  "test_Fungal infection_38",
  "Fungal infection",
  "I've been really itchy lately and there are these rashy spots all over my skin. There are also some areas that don't look like the normal color of my skin, and I've had some bumps that are kind of hard"
],
[
  "test_Fungal infection_39",
  "Fungal infection",
  "I've been quite itchy recently, and I have rashy places all over my body. There are also some regions that don't appear to be the typical hue of my skin, and I've experienced some firm lumps."
],
[
  "test_Fungal infection_40",
  "Fungal infection",
  "I've been itching and have rashy patches all over my skin recently. There are also some regions that don't appear to be the regular tone of my skin, and I've experienced some painful bumps."
],
[
  "test_Fungal infection_41",
  "Fungal infection",
  "Recently, I've been itching myself a lot, and my skin is covered with rashy patches. Furthermore, there are a few regions where my skin doesn't appear to be its usual tone, and I've experienced a few lumps that are exceptionally painful."
],
[
  "test_Fungal infection_42",
  "Fungal infection",
  "I've been having this constant itch and there are these red and bumpy spots on my skin. There are also some patches that are a different color than the rest of my skin, and I've had some bumps that are kind of like little lumps."
],
[
  "test_Fungal infection_43",
  "Fungal infection",
  "There are red, bumpy areas on my skin, and I've been scratching myself nonstop. Additionally, I have some bumps that resemble little lumps and some spots that are a different shade of skin than the rest of my body."
],
[
  "test_Fungal infection_44",
  "Fungal infection",
  "I've had a lot of itching on my skin, which occasionally turns into a rash. There are also some odd patches of skin that are a different hue than the rest of me, and I occasionally get little pimples that resemble nodules."
],
[
  "test_Fungal infection_45",
  "Fungal infection",
  "I've had a tendency of itching on my skin, that frequently turns into a rash. There are also some strange patches of skin that are a different tone than the rest of my skin, and I regularly get little lumps that mimic nodules."
],
[
  "test_Fungal infection_46",
  "Fungal infection",
  "I've been experiencing a lot of itching on my skin, and sometimes it turns into a rash. There are also some strange patches of skin that are a different color than the rest of me, and sometimes I get little bumps that look like nodules."
],
[
  "test_Fungal infection_47",
  "Fungal infection",
  "My body has been itching terribly all over, and there are now red spots everywhere. Some of the patches also differ in tone from my natural complexion. And there are these lumps or pimples that have appeared on my skin."
],
[
  "test_Fungal infection_48",
  "Fungal infection",
  "My skin has been really itchy lately, and it occasionally erupts into a rash. In addition, I have a few odd areas of skin that are a different coloration from the rest of me, and occasionally I develop little bumps that look  like nodules."
],
[
  "test_Fungal infection_49",
  "Fungal infection",
  "There are now red blotches all over my body where I have been itching horribly all over. A few of the patches also differ in complexion from my natural skin. And these lumps or bumps have developed on my skin."
],
[
  "test_Common Cold_50",
  "Common Cold",
  "I can't stop sneezing and my nose is really runny. I'm also really cold and tired all the time, and I've been coughing a lot. My fever is really high too, like way above normal."
],
[
  "test_Common Cold_51",
  "Common Cold",
  "My nose is extremely runny, and I can't seem to stop sneezing. In addition, I constantly feel cold, exhausted, and I've been coughing a lot. My fever is also really high far above normal."
],
[
  "test_Common Cold_52",
  "Common Cold",
  "I've been sneezing nonstop and I can't seem to shake this chill. I'm feeling really weak and tired, and my cough won't go away. My fever is really high"
],
[
  "test_Common Cold_53",
  "Common Cold",
  "I've been sneezing incessantly and I just can't get this chill to go away. I feel so weak and exhausted, and my cough won't stop. My temperature is really high."
],
[
  "test_Common Cold_54",
  "Common Cold",
  "I'm constantly sneezing and my body is shaking from being cold. I'm so tired I can barely move and my head is killing me. My fever is through the roof"
],
[
  "test_Common Cold_55",
  "Common Cold",
  "I'm constantly sneezing, and the cold is making my body tremble. I'm so exhausted that I can hardly move, and my head hurts. My fever is quite high."
],
[
  "test_Common Cold_56",
  "Common Cold",
  "I've been quite exhausted and ill. I'm sneezing nonstop and am quite cold. My head is throbbing, and I lack energy. Additionally, I have a very high fever and feel like I am on fire."
],
[
  "test_Common Cold_57",
  "Common Cold",
  "I've been feeling really tired and sick. I've been sneezing a lot and I can't seem to get warm. I'm so tired and my head is killing me. And my fever is really high, like I'm boiling."
],
[
  "test_Common Cold_58",
  "Common Cold",
  "I've been quite exhausted and ill. My throat has been quite painful, and I've had a fairly nasty cough. I've got a lot of chills and a pretty high temperature. Just feeling extremely run down and weak"
],
[
  "test_Common Cold_59",
  "Common Cold",
  "I've been quite exhausted and ill. I have been sneezing a lot and am having trouble warming up. I'm so exhausted, and my head hurts. And I feel like I am boiling over with my high temperature."
],
[
  "test_Common Cold_60",
  "Common Cold",
  "I can't stop sneezing and I feel really tired and crummy. My throat is really sore and I have a lot of gunky stuff in my nose and throat. My neck feels swollen and puffy too."
],
[
  "test_Common Cold_61",
  "Common Cold",
  "I can't stop sneezing, and I'm exhausted and sick. My throat is really uncomfortable, and there is a lot of junk in my nose and throat. My neck is also swollen and puffy." 
],
[
  "test_Common Cold_62",
  "Common Cold",
  "I keep sneezing, and I'm miserable and exhausted. I have a lot of gunky things in my nose and throat, and my throat is really hurting. My neck also feels puffy and swollen."
],
[
  "test_Common Cold_63",
  "Common Cold",
  "I've been feeling really exhausted and sick to my stomach. I've had a really bad cough and my throat has hurt a lot. I've experienced substantial sinus pressure and a congested nose. I'm really unpleasant and worn out."
],
[
  "test_Common Cold_64",
  "Common Cold",
  "I've been sneezing a lot and feeling really tired and sick. There's also a lot of gross stuff coming out of my nose and my throat feels really scratchy. And my neck feels swollen too."
],
[
  "test_Common Cold_65",
  "Common Cold",
  "I've been wheezing a lot and am generally feeling sick and exhausted. My throat feels really scratchy, and a lot of gross stuff is flowing out of my nose. My neck also feels bloated."
],
[
  "test_Common Cold_66",
  "Common Cold",
  "My sinuses feel incredibly congested, and my eyes are continuously red. I just constantly feel drained and exhausted. In addition, I have a lot of uncomfortable phlegm in my throat. My lymph nodes feel bloated, and breathing has been challenging."
],
[
  "test_Common Cold_67",
  "Common Cold",
  "My eyes have been really red and my sinuses feel congested. I just don't have any energy and my throat has been really itchy. I've also noticed my lymph nodes are swollen and I've been coughing up a lot of phlegm."
],
[
  "test_Common Cold_68",
  "Common Cold",
  "My sinuses feel stuffy, and my eyes have been quite red. I simply lack energy, and my throat has been really scratchy. Along with the swelling in my lymph nodes, I've also been coughing up a lot of phlegm."
],
[
  "test_Common Cold_69",
  "Common Cold",
  "My eyes are always red and itchy, and my nose feels all stuffy and congested. I just feel kind of sick and tired all the time, and I keep coughing up all this gunk. My throat feels sore and scratchy, and I've noticed that the bumps on my neck are bigger than usual"
],
[
  "test_Common Cold_70",
  "Common Cold",
  "My nose always feels stuffy and congested, and my eyes are always red and itching. I have a feeling of being unwell and fatigued, and I keep hacking up this gunk. I have a scratchy, irritated throat, and I've seen that my neck's bumps are larger than usual."
],
[
  "test_Common Cold_71",
  "Common Cold",
  "I keep sneezing, and my eyes don't quit dripping. It's incredibly difficult for me to breathe because it feels like there is something trapped in my throat. I often feel exhausted, and lately, I've had a lot of phlegm. Moreover, my lymph nodes are enlarged."
],
[
  "test_Common Cold_72",
  "Common Cold",
  "My eyes are red and watery all the time. I've also had this pressure in my sinuses that won't go away. I'm always feeling tired and I've been having a lot of trouble breathing. I've also had a lot of gunk in my throat and my lymph nodes are swollen."
],
[
  "test_Common Cold_73",
  "Common Cold",
  "My eyes are constantly red and runny. A persistent tightness in my sinuses has also been bothering me. I've been having a lot of difficulties breathing and constantly feel fatigued. In addition, I have a lot of throat mucus and inflamed lymph nodes."
],
[
  "test_Common Cold_74",
  "Common Cold",
  "My nose feels quite clogged, and my eyes are constantly very red and runny. In addition, my chest hurts and I've been having a lot of breathing problems. In addition, my muscles feel quite painful, and I can't smell anything."
],
[
  "test_Common Cold_75",
  "Common Cold",
  "My eyes are usually red and runny, and my nose is always stuffy. I've also been having difficulty breathing and my chest hurts. In addition, I can't smell anything and my muscles are quite painful."
],
[
  "test_Common Cold_76",
  "Common Cold",
  "My eyes are usually red and inflamed, and I have the impression that something is clogging my sinuses. I've been coughing up a lot of gunk, and my chest hurts. I can't smell anything, and my muscles are aching."
],
[
  "test_Common Cold_77",
  "Common Cold",
  "My eyes are always red and swollen, and I feel like there's something blocking my sinuses. I've been coughing up a lot of goo and my chest feels really heavy. I can't smell anything and my muscles are really sore"
],
[
  "test_Common Cold_78",
  "Common Cold",
  "I've been coughing a lot and feeling chilly and shivery. My nose has been quite clogged, and I am experiencing facial pressure. I also have a lot of phlegm, and coughing pains my chest. I can't smell anything, and my muscles are aching."
],
[
  "test_Common Cold_79",
  "Common Cold",
  "For days, I've had a nasty cough and cold. My sinuses are clogged, and I have facial pressure. I've also been creating phlegm, and coughing pains my chest. I can't smell anything, and my muscles are aching."
],
[
  "test_Common Cold_80",
  "Common Cold",
  "I've had a nasty cough and cold for days. My sinuses are congested, and I have facial pressure. I've also been coughing up mucus, and it pains my chest. I can't smell anything and my muscles are aching."
],
[
  "test_Common Cold_81",
  "Common Cold",
  "My cough and cold have been awful for days. My sinuses are congested, and my face is under strain. Additionally, I've been coughing up phlegm, and it hurts in my chest. I have no sense of smell, and my muscles hurt a lot."
],
[
  "test_Common Cold_82",
  "Common Cold",
  "I'm coughing nonstop and I'm shivering terribly. I have a stuffy nose and my face is under strain. In addition, my throat is coughing up some nasty gunk, and my chest hurts. My muscles hurt a lot, and I can't smell anything."
],
[
  "test_Common Cold_83",
  "Common Cold",
  "I can't stop coughing and I feel really cold. My sinuses are all blocked and I have a lot of mucus. My chest hurts and I can't smell anything. My muscles are also really sore."
],
[
  "test_Common Cold_84",
  "Common Cold",
  "I'm coughing nonstop and am really chilly. My mucus production is excessive, and my sinuses are fully clogged. I can't smell anything, and my chest hurts. My muscles are quite painful as well."
],
[
  "test_Common Cold_85",
  "Common Cold",
  "I can't stop coughing and I'm freezing. My sinuses are completely blocked, and I'm inundated with mucous. My chest hurts, and I'm unable to smell anything. My muscles are also really achy."
],
[
  "test_Common Cold_86",
  "Common Cold",
  "I've been coughing a lot and finding it difficult to breathe. My throat hurts and I feel like I have a lot of phlegm trapped in my chest. My nose has been running a lot, and I've been feeling really congested."
],
[
  "test_Common Cold_87",
  "Common Cold",
  "I've been quite exhausted and ill. My throat has been quite painful, and I've had a fairly nasty cough. I've got a lot of chills and a pretty high temperature. Just feeling extremely run down and weak"
],
[
  "test_Common Cold_88",
  "Common Cold",
  "I've been experiencing severe weariness and a sickly sensation. My throat has been really painful and I've had a fairly severe cough. My nose has been quite stuffy, and I've had significant sinus pressure. I'm really miserable and extremely exhausted."
],
[
  "test_Common Cold_89",
  "Common Cold",
  "I've been feeling really sick and I've had a lot of fatigue. I've had a really bad cough and my throat has been really sore. I've had a lot of sinus pressure and my nose has been really congested. I just feel really run down and miserable."
],
[
  "test_Common Cold_90",
  "Common Cold",
  "I've been quite exhausted and ill. My throat has been quite painful, and I've had a fairly nasty cough. I've got a lot of chills and a pretty high temperature. Simply put, I feel really run down and feeble."
],
[
  "test_Common Cold_91",
  "Common Cold",
  "I've been really weary and ill. I've been suffering from a severe cough and sore throat. I've got a lot of chills and a pretty high temperature. I simply feel tired and run down."
],
[
  "test_Common Cold_92",
  "Common Cold",
  "I can't quit sneezing, and my nose is running. I'm also constantly chilly and exhausted, and I've been coughing a lot. My fever is also really high, well above usual."     
],
[
  "test_Common Cold_93",
  "Common Cold",
  "I've been feeling awful, with a lot of congestion and a runny nose. I've been coughing a lot and having a lot of chest pain. My fever has been really high, and I've been experiencing severe muscular discomfort."
],
[
  "test_Common Cold_94",
  "Common Cold",
  "My neck is swollen, and I'm exhausted. My throat is scratchy, and my eyes are burning red. My nose is really clogged, and I am experiencing facial pressure. My chest hurts, and I'm unable to smell anything."
],
[
  "test_Common Cold_95",
  "Common Cold",
  "I lack energy and feel like my neck is bloated. My eyes are red, and my throat feels scratchy. I have severe congestion in my nostrils, and my face is under pressure. I can't smell anything, and my chest hurts."
],
[
  "test_Common Cold_96",
  "Common Cold",
  "I feel quite weak, and my lymph nodes are enlarged. My eyes are burning, and my throat hurts. My sinuses are under strain, and my nose is stuffy. I can't smell anything, and my chest hurts."
],
[
  "test_Common Cold_97",
  "Common Cold",
  "I've had a terrible cough and cold for days. My face is tired and my sinuses are blocked. In addition, my chest hurts from the phlegm I've been coughing up. I can't smell, and my muscles are in terrible pain."
],
[
  "test_Common Cold_98",
  "Common Cold",
  "I have red, watery eyes all the time. My sinuses have also been bothered by a constant tightness. My breathing has been quite tough, and I've been feeling worn out all the time. My lymph nodes are irritated, and I also have a lot of throat mucous."
],
[
  "test_Common Cold_99",
  "Common Cold",
  "I always get hot, puffy eyes and the feeling that something is obstructing my sinuses. My chest feels quite heavy, and I've been coughing up a lot of gunk. I have no sense of smell, and my muscles hurt a lot."
],
[
  "test_Pneumonia_100",
  "Pneumonia",
  "I've been feeling really cold and tired lately, and I've been coughing a lot with chest pain. My heart is beating really fast too, and when I cough, the phlegm is kind of a rusty color."
],
[
  "test_Pneumonia_101",
  "Pneumonia",
  "I've been coughing a lot recently with chest pain and feeling incredibly chilly and exhausted. Additionally, my heart is thumping rapidly, and the phlegm I cough up has a reddish hue."
],
[
  "test_Pneumonia_102",
  "Pneumonia",
  "I've been feeling really drained and cold, and I can't stop coughing. It hurts in my chest when I do, and my heart feels like it's racing. The mucus I'm coughing up is a gross brownish color."
],
[
  "test_Pneumonia_103",
  "Pneumonia",
  "I've been exhausted and chilly, and I can't stop coughing. When I do, it pains in my chest and makes my heart race. My coughing mucous has a disgusting brownish hue."      
],
[
  "test_Pneumonia_104",
  "Pneumonia",
  "I've been having chills and feeling exhausted, and I can't seem to shake this cough. My chest hurts when I cough, and my heart feels like it's going a million miles an hour. The phlegm I'm coughing up is a dirty rust color."
],
[
  "test_Pneumonia_105",
  "Pneumonia",
  "I've been experiencing chills, feeling worn out, and I can't seem to get rid of this cough. When I cough, my chest aches and my heart feels as like it is beating a million miles per hour. I'm coughing up a nasty rust-colored phlegm."
],
[
  "test_Pneumonia_106",
  "Pneumonia",
  "I've been feeling really weak and cold lately, and this cough won't go away. It hurts in my chest when I cough, and my heart is pounding. The mucus I'm bringing up is a rusty brown color."
],
[
  "test_Pneumonia_107",
  "Pneumonia",
  "I've been having chills and feeling really worn out, and this cough won't go away. My chest hurts when I cough, and my heart is racing. The mucus I'm bringing up is a gross brownish color."
],
[
  "test_Pneumonia_108",
  "Pneumonia",
  "I've been experiencing chills, feel really exhausted, and my cough just won't go away. When I cough, my chest aches and my heart is pounding. It's a disgusting brownish hue, the mucous I'm coming up."
],
[
  "test_Pneumonia_109",
  "Pneumonia",
  "I have a really high fever, and I'm having trouble breathing. I'm sweating a lot and feeling really cold and tired. My heart is beating really fast, and I have some brownish sputum"
],
[
  "test_Pneumonia_110",
  "Pneumonia",
  "I'm having problems breathing and have a very high fever. I'm perspiring a lot and experiencing extreme fatigue and chilly. My heart is racing, and I'm coughing up some brownish mucus."
],
[
  "test_Pneumonia_111",
  "Pneumonia",
  "My temperature is very high, and I'm having a hard time breathing. I'm sweating profusely, and I'm shaking with chills. I'm really tired, and my heart is beating really fast. I also have some brownish phlegm coming up"
],
[
  "test_Pneumonia_112",
  "Pneumonia",
  "I'm having trouble breathing, and my fever is really high. I'm drenched in sweat and shivering from the chill. My heart is thumping rapidly, and I'm quite exhausted. Additionally, I'm about to have some brownish phlegm."
],
[
  "test_Pneumonia_113",
  "Pneumonia",
  "My fever is really high, and I'm having trouble catching my breath. I'm sweating a lot, feeling cold and tired, and my heart is beating really fast. I also have some brownish phlegm coming up."
],
[
  "test_Pneumonia_114",
  "Pneumonia",
  "I have a really high fever, and I have problems breathing. My heart is racing quite quickly, I'm perspiring a lot, and I feel chilly and exhausted. I'm also about to cough out some brownish phlegm."
],
[
  "test_Pneumonia_115",
  "Pneumonia",
  "I've been feeling really sick with a high fever, shortness of breath, sweating, chills, and extreme fatigue. My heart rate is rapid, and I've been coughing up a lot of brownish sputum."
],
[
  "test_Pneumonia_116",
  "Pneumonia",
  "With a high temperature, shortness of breath, sweating, chills, and intense exhaustion, I've been feeling quite poorly. I've been coughing up a lot of brownish phlegm and my pulse rate is racing."
],
[
  "test_Pneumonia_117",
  "Pneumonia",
  "I'm having a really hard time catching my breath and I'm sweating a lot. I feel really sick and have a lot of mucus in my throat. My chest hurts and my heart is racing. The mucus I'm coughing up is dark and looks like rust."
],
[
  "test_Pneumonia_118",
  "Pneumonia",
  "I'm sweating profusely and finding it difficult to catch my breath. I feel quite ill, and my throat is very mucous. My heart is pounding, and my chest aches. I'm coughing up thick mucous that resembles rust."
],
[
  "test_Pneumonia_119",
  "Pneumonia",
  "I'm having a lot of trouble breathing and am really uneasy. I'm feeling unwell and am perspiring a lot. My chest hurts and I have a lot of mucus in my throat. My heart is racing, and the hue of the mucus I'm coughing up is off."
],
[
  "test_Pneumonia_120",
  "Pneumonia",
  "I can't seem to get enough air and I'm sweating a lot. I don't feel well and there's a lot of phlegm in my throat. My chest hurts and my heart is racing. The mucus I'm coughing up is reddish in color."
],
[
  "test_Pneumonia_121",
  "Pneumonia",
  "I'm sweating profusely and can't seem to get enough air. My throat is filled with a lot of mucus, and I don't feel good. My heart is pounding, and my chest aches. I'm coughing up reddish-colored mucous."
],
[
  "test_Pneumonia_122",
  "Pneumonia",
  "I can't seem to catch my breath and I'm sweating a lot. I feel really sick and have a lot of phlegm in my throat. My chest hurts and my heart is racing. The mucus I'm coughing up is yellowish."
],
[
  "test_Pneumonia_123",
  "Pneumonia",
  "I'm dripping with perspiration and can't seem to catch my breath. My throat is filled with a lot of phlegm, and I feel awful. My heart is pounding, and my chest aches. I'm coughing up brownish mucous."
],
[
  "test_Pneumonia_124",
  "Pneumonia",
  "I'm having a hard time breathing and I feel really uncomfortable. I'm sweating a lot and there's a lot of phlegm in my throat. My chest hurts and my heart is beating fast. The mucus I'm coughing up is brownish."
],
[
  "test_Pneumonia_125",
  "Pneumonia",
  "I'm having trouble breathing and am quite uneasy. My throat is filled with a lot of phlegm, and I'm perspiring a lot. My heart is racing, and my chest aches. I'm coughing up reddish mucous."
],
[
  "test_Pneumonia_126",
  "Pneumonia",
  "I can't seem to catch my breath and I'm sweating a lot. I feel really sick and have a lot of phlegm in my throat. My chest hurts and my heart is racing. The mucus I'm coughing up is brownish and stringy."
],
[
  "test_Pneumonia_127",
  "Pneumonia",
  "I'm dripping with perspiration and can't seem to catch my breath. My throat is filled with a lot of phlegm, and I feel awful. My heart is pounding, and my chest aches. I'm coughing up a stringy, brownish mucous."
],
[
  "test_Pneumonia_128",
  "Pneumonia",
  "I'm drenched with sweat and struggling to breathe. I don't feel well and have a lot of mucous in my throat. My chest aches, and my heart is racing. I'm coughing up mucus that is crimson in colour."
],
[
  "test_Pneumonia_129",
  "Pneumonia",
  "I've been feeling very lousy, with a high temperature, shortness of breath, sweating, chills, and extreme weariness. My heart is beating, and I've been coughing up a lot of brownish phlegm."
],
[
  "test_Pneumonia_130",
  "Pneumonia",
  "I have a really high fever, and I have problems breathing. My heart is racing quite quickly, I'm perspiring a lot, and I feel chilly and exhausted. I'm also about to cough out some brownish phlegm."
],
[
  "test_Pneumonia_131",
  "Pneumonia",
  "My fever is really high, and I'm having difficulty breathing. I'm drenched in sweat and shivering with chills. I'm quite fatigued, and my heart is racing. I'm also expecting some brownish phlegm."
],
[
  "test_Pneumonia_132",
  "Pneumonia",
  "I've been getting chills, feeling tired, and I can't seem to shake this cough. My chest aches and my heart feels like it's racing at a million miles per hour when I cough. I'm coughing out a foul rusty phlegm."
],
[
  "test_Pneumonia_133",
  "Pneumonia",
  "I'm having a hard time breathing and I feel really uncomfortable. I'm sweating a lot and there's a lot of phlegm in my throat. My chest hurts and my heart is beating fast. The mucus I'm coughing up is brownish."
],
[
  "test_Pneumonia_134",
  "Pneumonia",
  "I'm having trouble breathing and am really uncomfortable. I'm sweating profusely and have a lot of mucus in my throat. My chest aches, and my heart is racing. I'm coughing up dark mucous."
],
[
  "test_Pneumonia_135",
  "Pneumonia",
  "I've got a high fever and can't seem to catch my breath. I've been sweating profusely and generally feeling ill and weak. I've also had some quite thick and black phlegm. My chest aches, and my heart has been racing rapidly."
],
[
  "test_Pneumonia_136",
  "Pneumonia",
  "Lately I've been experiencing chills, fatigue, a cough, a high fever, and difficulty breathing. I've been sweating a lot and just feeling really sick and weak. I've also had some phlegm that's been really thick and dark."
],
[
  "test_Pneumonia_137",
  "Pneumonia",
  "I've recently been suffering with chills, lethargy, a cough, a high temperature, and difficulties breathing. I've been sweating profusely and generally feeling ill and weak. I've also had some quite thick and black phlegm."
],
[
  "test_Pneumonia_138",
  "Pneumonia",
  "Lately I've been experiencing chills, fatigue, a cough, a high fever, and difficulty breathing. I've been sweating a lot and just feeling really sick and weak. I've also had some phlegm that's been really thick and dark."
],
[
  "test_Pneumonia_139",
  "Pneumonia",
  "I've recently been suffering with chills, lethargy, a cough, a high temperature, and difficulties breathing. I've been sweating profusely and generally feeling ill and weak. I've also had some quite thick and red phlegm."
],
[
  "test_Pneumonia_140",
  "Pneumonia",
  "I've had chills, lethargy, a cough, a high temperature, and difficulties breathing lately. I've been sweating profusely and generally feeling ill and weak. I've also had some quite thick and black phlegm."
],
[
  "test_Pneumonia_141",
  "Pneumonia",
  "I've been having a lot of respiratory issues lately along with chills, exhaustion, a cough, and a high temperature. I've been sweating profusely and generally feeling ill and weak. My chest aches, and my heart has been racing rapidly."
],
[
  "test_Pneumonia_142",
  "Pneumonia",
  "I've been suffering with chills, tiredness, and a cough recently. I've been sweating tremendously and feeling overall unwell and weak. I've also had some thick, black phlegm. My chest aches, and my heart has been racing."
],
[
  "test_Pneumonia_143",
  "Pneumonia",
  "I'm running a temperature and can't seem to catch my breath. I've been sweating tremendously and feeling overall unwell and weak. I've also had some thick, black phlegm. My heart has been beating frantically, and my chest hurts."
],
[
  "test_Pneumonia_144",
  "Pneumonia",
  "I'm drenched with sweat and can't seem to catch my breath. My throat is clogged with mucus, and I'm miserable. My heart is racing, and my chest aches. I'm coughing up a brownish stringy mucus."
],
[
  "test_Pneumonia_145",
  "Pneumonia",
  "I'm saturated with sweat and struggling to breathe. My throat is blocked with mucous, and I'm uncomfortable. My heart is racing, and my chest aches. I'm coughing up a darkish stringy mucous."
],
[
  "test_Pneumonia_146",
  "Pneumonia",
  "I'm having a lot of problems breathing. I'm not feeling good, and I'm sweating a lot. I have a lot of mucous in my throat and my chest hurts. My breathing is laboured, and the phlegm I'm coughing up has an odd tint."
],
[
  "test_Pneumonia_147",
  "Pneumonia",
  "I have a lot of difficulty breathing. I don't feel well, and I'm perspiring a lot. My chest hurts, and I have a lot of mucus in my throat. I'm having trouble breathing, and the phlegm I'm coughing up has a strange hue."
],
[
  "test_Pneumonia_148",
  "Pneumonia",
  "I've been coughing a lot and feeling incredibly chilly and exhausted. I have a pretty high fever, and it's difficult for me to breathe. I've been perspiring a lot and generally feeling weak and ill. I've had some quite thick and black phlegm."
],
[
  "test_Pneumonia_149",
  "Pneumonia",
  "I've recently had chills, exhaustion, a cough, a high temperature, and breathing issues. I've been perspiring a lot and generally feeling weak and ill. I've had some quite thick and black phlegm. My heart has been racing quite quickly."
],
[
  "test_Dimorphic Hemorrhoids_150",
  "Dimorphic Hemorrhoids",
  "Constipation, discomfort with bowel motions, and anus pain have all recently been bothering me. My anus has been quite inflamed, and my stool has been extremely bloody.'   
],
[
  "test_Dimorphic Hemorrhoids_151",
  "Dimorphic Hemorrhoids",
  "Lately I've been experiencing constipation, pain during bowel movements, and pain in my anus. My stool has also been really bloody and my anus has been really irritated."  
],
[
  "test_Dimorphic Hemorrhoids_152",
  "Dimorphic Hemorrhoids",
  "Recently, I've been having a lot of difficulty using the restroom. My bowel movements have been extremely uncomfortable and difficult for me to have.  My anus has been quite inflamed, and my stool has been extremely bloody."
],
[
  "test_Dimorphic Hemorrhoids_153",
  "Dimorphic Hemorrhoids",
  "I've been having a lot of trouble going to the bathroom lately. It's really painful when I do, and there's been some blood in my stool. I've also been having some pain and irritation around my anus."
],
[
  "test_Dimorphic Hemorrhoids_154",
  "Dimorphic Hemorrhoids",
  "Recently, I've been having a lot of difficulty using the restroom. When I do, it hurts a lot, and I've noticed some blood in my stool. Around my anus, I've also been experiencing some discomfort and itching."
],
[
  "test_Dimorphic Hemorrhoids_155",
  "Dimorphic Hemorrhoids",
  "Lately I've been really constipated, and it's been really painful when I do go to the bathroom. I've also noticed some blood in my stool, and my anus has been really irritated."
],
[
  "test_Dimorphic Hemorrhoids_156",
  "Dimorphic Hemorrhoids",
  "I've been suffering from severe constipation lately, and whenever I do go to the restroom, it hurts a lot. Aside from that, my anus has been really itchy, and I've observed some blood in my stool."
],
[
  "test_Dimorphic Hemorrhoids_157",
  "Dimorphic Hemorrhoids",
  "I've been having a lot of trouble going to the bathroom lately, and it's been really painful. I've also noticed that my stool has been bloody and my anus has been really irritated."
],
[
  "test_Dimorphic Hemorrhoids_158",
  "Dimorphic Hemorrhoids",
  "Recently, I've been having a lot of discomfort and difficulty using the restroom. Additionally, I've noticed that my anus has been quite sore and that my stool has been bloody."
],
[
  "test_Dimorphic Hemorrhoids_159",
  "Dimorphic Hemorrhoids",
  "I've been terribly constipated lately, and when I do go to the bathroom, it hurts a lot. Aside from that, my anus has been really itchy, and I've observed some blood in my stool."
],
[
  "test_Dimorphic Hemorrhoids_160",
  "Dimorphic Hemorrhoids",
  "I've been quite constipated lately, and going to the restroom has been excruciatingly uncomfortable. I've also observed blood in my stool, and my anus has been aggravated."],
[
  "test_Dimorphic Hemorrhoids_161",
  "Dimorphic Hemorrhoids",
  "I've been having a lot of trouble going to the bathroom lately. It's been really painful and I've been experiencing pain in my anus. My stool has also been bloody and my anus has been really irritated."
],
[
  "test_Dimorphic Hemorrhoids_162",
  "Dimorphic Hemorrhoids",
  "I've been having a lot of problems using the restroom recently. It's been excruciatingly uncomfortable, and I've been feeling agony in my anus. My stool has been bloody as well, and my anus has been really inflamed."
],
[
  "test_Dimorphic Hemorrhoids_163",
  "Dimorphic Hemorrhoids",
  "I've been having trouble going to the restroom recently. When I try to go, it's really uncomfortable, and my anus hurts a lot. I've also had some blood in my stool, and my anus has been really uncomfortable."
],
[
  "test_Dimorphic Hemorrhoids_164",
  "Dimorphic Hemorrhoids",
  "I've been having a really hard time going to the bathroom lately. It's really painful when I try to go and my anus hurts a lot. There's also been some blood in my stool and my anus has been really itchy."
],
[
  "test_Dimorphic Hemorrhoids_165",
  "Dimorphic Hemorrhoids",
  "I've been experiencing problems using the restroom recently. It's quite difficult for me to go, and it hurts when I do. I've also been experiencing buttock soreness and bloody stools. My anus has also been quite itching and sensitive."
],
[
  "test_Dimorphic Hemorrhoids_166",
  "Dimorphic Hemorrhoids",
  "Recently, I've been having problems using the restroom. Going is incredibly difficult, and doing so hurts. In addition, I've been experiencing some butt soreness, and my stools have been bloody. My anus has also been quite itching and aggravated."
],
[
  "test_Dimorphic Hemorrhoids_167",
  "Dimorphic Hemorrhoids",
  "I've been constipated and it's really hard to go to the bathroom. When I do go, it hurts and my stool has been bloody. I've also been having some pain in my butt and my anus has been really itchy and irritated."
],
[
  "test_Dimorphic Hemorrhoids_168",
  "Dimorphic Hemorrhoids",
  "Since I've been constipated, using the restroom has been quite challenging. When I do go, it aches and I've had blood in my stool. My anus has been quite itchy and irritating, and I've also been experiencing some discomfort in my butt."
],
[
  "test_Dimorphic Hemorrhoids_169",
  "Dimorphic Hemorrhoids",
  "I've been constipated and it's really hard to go to the bathroom. When I do go, it hurts and my stool has been bloody. I've also been having some pain in my butt and my anus has been really itchy and irritated."
],
[
  "test_Dimorphic Hemorrhoids_170",
  "Dimorphic Hemorrhoids",
  "Since I've been constipated, using the restroom has been quite challenging. When I do go, it aches and I've had blood in my stool. My anus has been quite itchy and irritating, and I've also been experiencing some discomfort in my butt."
],
[
  "test_Dimorphic Hemorrhoids_171",
  "Dimorphic Hemorrhoids",
  "I've been constipated and it's really hard to go to the bathroom. When I do go, it hurts and my stool has been bloody. I've also been having some pain in my butt and my anus has been really itchy and irritated."
],
[
  "test_Dimorphic Hemorrhoids_172",
  "Dimorphic Hemorrhoids",
  "Constipation has made it quite difficult for me to use the restroom. My stool has been bloody when I do go, and it hurts. In addition, my anus has been quite itchy and inflamed, and I've been experiencing some butt soreness."
],
[
  "test_Dimorphic Hemorrhoids_173",
  "Dimorphic Hemorrhoids",
  "It's incredibly difficult for me to use the restroom, and when I do, it hurts a lot. My stools have been bloody, and my butt has been hurting. My anus has also been quite itching and aggravated."
],
[
  "test_Dimorphic Hemorrhoids_174",
  "Dimorphic Hemorrhoids",
  "I'm having a lot of trouble going to the bathroom and it's really painful when I do. My stool has been bloody and I've had some pain in my butt. My anus has been really itchy and irritated too."
],
[
  "test_Dimorphic Hemorrhoids_175",
  "Dimorphic Hemorrhoids",
  "I've been having trouble going to the bathroom. It's been really hard to go and it hurts when I do. My anus is really sore and it's been bleeding when I go. It's really painful and I'm really uncomfortable."
],
[
  "test_Dimorphic Hemorrhoids_176",
  "Dimorphic Hemorrhoids",
  "I've been finding it challenging to use the restroom. Going has been quite difficult, and it aches when I do. When I go, my anus bleeds and is really uncomfortable. I'm in a lot of discomfort and it hurts extremely bad."
],
[
  "test_Dimorphic Hemorrhoids_177",
  "Dimorphic Hemorrhoids",
  "I've been having difficulty using the restroom. It's been difficult to go, and it aches when I do. My anus is quite painful, and it has been bleeding whenever I go. It's excruciatingly painful, and I'm quite uneasy."
],
[
  "test_Dimorphic Hemorrhoids_178",
  "Dimorphic Hemorrhoids",
  "Lately I've been experiencing constipation and pain during bowel movements. My anus is really sore and it's been bleeding when I go. It's really painful and I'm really uncomfortable."
],
[
  "test_Dimorphic Hemorrhoids_179",
  "Dimorphic Hemorrhoids",
  "I've recently been suffering from constipation and digestive discomfort. My anus is quite painful, and it has been bleeding whenever I go. It's excruciatingly painful, and I'm quite uneasy."
],
[
  "test_Dimorphic Hemorrhoids_180",
  "Dimorphic Hemorrhoids",
  "Constipation and soreness with bowel motions have been bothering me lately. When I go, my anus bleeds and is really uncomfortable. I'm in a lot of discomfort and it hurts extremely bad."
],
[
  "test_Dimorphic Hemorrhoids_181",
  "Dimorphic Hemorrhoids",
  "I've been having a lot of trouble with my bowel movements lately. It's hard to go and it hurts when I do. My anus is really sore and it's been bleeding when I go. It's really painful and I'm really uncomfortable."
],
[
  "test_Dimorphic Hemorrhoids_182",
  "Dimorphic Hemorrhoids",
  "My bowel motions have been really difficult for me recently. Going is difficult, and it aches when I do. When I go, my anus bleeds and is really uncomfortable. I'm in a lot of discomfort and it hurts extremely bad."
],
[
  "test_Dimorphic Hemorrhoids_183",
  "Dimorphic Hemorrhoids",
  "I've been experiencing a lot of bowel movement issues recently. It's difficult to go, and it hurts when I do. My anus is quite painful, and it has been bleeding whenever I go. It's excruciatingly painful, and I'm quite uneasy."
],
[
  "test_Dimorphic Hemorrhoids_184",
  "Dimorphic Hemorrhoids",
  "I'm having a lot of trouble with my bowel movements lately. It's hard to go and it hurts when I do. My anus is really sore and it's been bleeding when I go. It's really painful and I'm really uncomfortable."
],
[
  "test_Dimorphic Hemorrhoids_185",
  "Dimorphic Hemorrhoids",
  "I've been experiencing a lot of problems with my bowel motions recently. It's difficult to go, and it hurts when I do. My anus is quite painful, and it has been bleeding whenever I go. It's excruciatingly painful, and I'm quite uneasy."
],
[
  "test_Dimorphic Hemorrhoids_186",
  "Dimorphic Hemorrhoids",
  "My bowel motions are giving me a lot of problems right now. Going is difficult, and going hurts when I do it. When I go, my anus bleeds and is really uncomfortable. I'm in a lot of discomfort and it hurts extremely bad."
],
[
  "test_Dimorphic Hemorrhoids_187",
  "Dimorphic Hemorrhoids",
  "Lately I've been experiencing constipation and pain during bowel movements. My anus is really sore and it's been bleeding when I go. It's really painful and I'm really uncomfortable."
],
[
  "test_Dimorphic Hemorrhoids_188",
  "Dimorphic Hemorrhoids",
  "I've been having constipation and bowel motions that hurt recently. When I go, my anus bleeds and is really uncomfortable. I'm in a lot of discomfort and it hurts extremely bad."
],
[
  "test_Dimorphic Hemorrhoids_189",
  "Dimorphic Hemorrhoids",
  "I've recently been suffering from constipation and digestive discomfort. My anus is quite painful, and it has been bleeding whenever I go. It's excruciatingly painful, and I'm quite uneasy."
],
[
  "test_Dimorphic Hemorrhoids_190",
  "Dimorphic Hemorrhoids",
  "I've been experiencing a lot of bowel movement issues recently. It's difficult to go, and it hurts when I do. My anus is quite painful, and it has been bleeding whenever I go. It's excruciatingly painful, and I'm quite uneasy."
],
[
  "test_Dimorphic Hemorrhoids_191",
  "Dimorphic Hemorrhoids",
  "I'm having a lot of trouble with my bowel movements lately. It's hard to go and it hurts when I do. My anus is really sore and it's been bleeding when I go. It's really painful and I'm really uncomfortable."
],
[
  "test_Dimorphic Hemorrhoids_192",
  "Dimorphic Hemorrhoids",
  "My bowel motions have been really difficult for me recently. Going is difficult, and it aches when I do. When I go, my anus bleeds and is really uncomfortable. I'm in a lot of discomfort and it hurts extremely bad."
],
[
  "test_Dimorphic Hemorrhoids_193",
  "Dimorphic Hemorrhoids",
  "I've been experiencing a lot of problems with my bowel motions recently. It's difficult to go, and it hurts when I do. My anus is quite painful, and it has been bleeding whenever I go. It's excruciatingly painful, and I'm quite uneasy."
],
[
  "test_Dimorphic Hemorrhoids_194",
  "Dimorphic Hemorrhoids",
  "I've been experiencing a lot of bowel movement issues recently. It's difficult to go, and it hurts when I do. My anus is quite painful, and it has been bleeding whenever I go. It's really painful and I'm really uncomfortable."
],
[
  "test_Dimorphic Hemorrhoids_195",
  "Dimorphic Hemorrhoids",
  "I've been getting a lot of bowel issues recently. It's difficult for me to go, and it hurts when I do. My anus is quite painful, and it has been bleeding whenever I go. It's excruciatingly painful, and I'm quite uneasy."
],
[
  "test_Dimorphic Hemorrhoids_196",
  "Dimorphic Hemorrhoids",
  "I've been having a really hard time going to the bathroom lately. It's really painful and I'm only able to go every few days. There's also a lot of pain in my anus and around that area. My stool has been really bloody and my anus feels really irritated."
],
[
  "test_Dimorphic Hemorrhoids_197",
  "Dimorphic Hemorrhoids",
  "I've been finding it incredibly difficult recently to use the restroom. I can only go sporadically because it hurts so much. My anus and the surrounding region are also quite painful. My anus feels really aggravated, and my stool has been extremely bloody."
],
[
  "test_Dimorphic Hemorrhoids_198",
  "Dimorphic Hemorrhoids",
  "I'm having a lot of trouble with constipation and pain while trying to go to the bathroom. It hurts a lot in my anus and the area around it. My stool has been bloody and my anus is really irritated."
],
[
  "test_Dimorphic Hemorrhoids_199",
  "Dimorphic Hemorrhoids",
  "Constipation and bowel movement discomfort have been very common for me lately. The region surrounding my anus and I both ache a lot. My anus is really itchy, and my stool has been bloody."
],
[
  "test_Arthritis_200",
  "Arthritis",
  "My muscles have been feeling really weak, and my neck has been extremely tight. I've been experiencing a lot of stiffness when I walk about and my joints have been swollen. Walking has also been really uncomfortable."
],
[
  "test_Arthritis_201",
  "Arthritis",
  "I've been feeling really weak in my muscles and my neck has been really stiff. My joints have been swelling up and I've been having a lot of stiffness when I move around. It's also been really painful to walk."
],
[
  "test_Arthritis_202",
  "Arthritis",
  "My muscles have been quite weak, and my neck has been really stiff. My joints have swollen and I've been experiencing a lot of stiffness when I move around. Walking has also been excruciatingly uncomfortable."
],
[
  "test_Arthritis_203",
  "Arthritis",
  "I've been feeling really weak in my muscles and my neck has been really stiff. My joints have been swelling up and it's been hard to move around. Walking has been really painful."
],
[
  "test_Arthritis_204",
  "Arthritis",
  "My muscles have been really weak, and my neck has been extremely stiff. My joints have swollen, making it difficult to move about. Walking has been excruciatingly uncomfortable."
],
[
  "test_Arthritis_205",
  "Arthritis",
  "I've been experiencing severe muscular weakness, and my neck has been really stiff. It has been difficult to move about since my joints have swollen. It has been really uncomfortable to walk."
],
[
  "test_Arthritis_206",
  "Arthritis",
  "My muscles have been feeling really weak, and my neck has been extremely tight. My joints have swollen, making it difficult for me to move. It has hurt a lot to walk.'     
],
[
  "test_Arthritis_207",
  "Arthritis",
  "My neck has been so tense, and I've been feeling like my muscles are incredibly weak. I have trouble moving since my joints have enlarged. To walk has been quite painful." 
],
[
  "test_Arthritis_208",
  "Arthritis",
  "My neck has been really stiff, and I've had terrible muscle weakness. Due to the swelling in my joints, it has been challenging to move about. Walking has been quite unpleasant."
],
[
  "test_Arthritis_209",
  "Arthritis",
  "I've been feeling really weak in my muscles lately and my neck has been really stiff. My joints have been swelling up and it's hard for me to move around without feeling stiff. Walking has been really painful too."
],
[
  "test_Arthritis_210",
  "Arthritis",
  "Recently, my muscles have felt quite weak, and my neck has been really tight. I have swollen joints and find it difficult to move about without becoming stiff. It has also been really uncomfortable to walk."
],
[
  "test_Arthritis_211",
  "Arthritis",
  "I've been experiencing muscular weakness and stiffness in my neck recently. My joints have swollen, making it difficult for me to walk about without becoming stiff. Walking has also been excruciatingly uncomfortable."
],
[
  "test_Arthritis_212",
  "Arthritis",
  "Recently, I've been suffering neck muscle weakness and stiffness. My joints have enlarged and it is difficult for me to walk without feeling stiff. Walking has also been excruciatingly uncomfortable."
],
[
  "test_Arthritis_213",
  "Arthritis",
  "Lately, my neck has been tight and my muscles have been weakened. I have swelling joints that make it difficult for me to move about without getting stiff. It has also been agonisingly painful to walk."
],
[
  "test_Arthritis_214",
  "Arthritis",
  "I've been feeling really weak in my muscles and my neck has been really stiff. My joints have been swelling up and it's hard for me to move around without feeling stiff. Walking has been really painful too."
],
[
  "test_Arthritis_215",
  "Arthritis",
  "My muscles have been feeling really weak, and my neck has been extremely tight. I have swollen joints and find it difficult to move about without becoming stiff. It has also been really uncomfortable to walk."
],
[
  "test_Arthritis_216",
  "Arthritis",
  "My muscles have been quite weak, and my neck has been really stiff. My joints have swollen, making it difficult for me to walk about without becoming stiff. Walking has also been excruciatingly uncomfortable."
],
[
  "test_Arthritis_217",
  "Arthritis",
  "My muscles have been really weak, and my neck has been extremely stiff. My joints have swollen, making it difficult for me to walk about without feeling stiff. Walking has also been really uncomfortable."
],
[
  "test_Arthritis_218",
  "Arthritis",
  "My muscles have been quite weak, and my neck has been really stiff. My joints have swollen, making it difficult for me to move without becoming stiff. Walking has been quite uncomfortable as well."
],
[
  "test_Arthritis_219",
  "Arthritis",
  "My neck has been really tight, and my muscles have been rather weak. I have swelling joints that make it hard for me to move without getting stiff. Additionally, walking has been quite unpleasant."
],
[
  "test_Arthritis_220",
  "Arthritis",
  "I've been feeling really weak in my muscles and my neck has been really stiff. My joints have been swelling up and it's hard for me to move around without feeling stiff. Walking has been really painful too."
]];

module.exports = { dataset }