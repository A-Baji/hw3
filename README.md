## hw3
COSC 4370 Homework 3

PSID: 1776794

# Environment:
* OS: Windows 10

* Language: C++

* IDE: Visual Studio

# Report

**Shaders**

For the shaders I have five files. One is just the vertex shader, and the other four are the fragment shaders for each different kind of lighting: ambient, diffuse, specular, and phong. The code for them is referenced from 

* https://learnopengl.com/Lighting/Basic-Lighting,

* https://learnopengl.com/code_viewer_gh.php?code=src/2.lighting/2.2.basic_lighting_specular/2.2.basic_lighting.vs,

* https://learnopengl.com/code_viewer_gh.php?code=src/2.lighting/2.2.basic_lighting_specular/2.2.basic_lighting.fs

The one vertex file works for all four of the fragment files. To switch between fragment files, change the file name on line 85 of main.cpp.

*Vertex*
In the vertex shader "phong.vs", we calculate the position of the fragment by multiplying the vertex position with model matrix. Then we multiply the normal vector by the inverse of the model matrix to prevent uneven scaling. Then we calculate the new position by multiplying the current projection by the view and then fragment position.

*Fragment*
In "ambient.frag", we calculate the ambient lighting by multiplying an ambient strength value by the lightColor vector. Then we get the resulting lighintg by multiply the ambient lighting by the ObjectColor vector.

In "diffuse.frag", we get the diffused lighting by calculating the dot product between the normal vector and the lightDir vector. Then we get the resulting lighting by multiply the diffused lighting by the ObjectColor vector.

In "specular.frag", we get the specular lighting by first calculating the reflection direction using the reflect() function, passing the negative value of the lightDir vector and the normal vector as parameters. Then we calculate a "spec" float value by raising the dot product between the normal vector and the lightDir vector to the 32nd power. Then we calculate the specular lighting vector by multiplying a specular strength float value by the spec value and then by the lightColor vector. Then we get the resulting lighting by multiply the specular lighting by the ObjectColor vector.

In "phong.frag", we combine all the techniques from the 3 different types of lightings. After calculating the ambient lighting, the diffused lighting, and the specular lighting, we find the sum of all three vectors and then multiply it by the objectColor vector.
