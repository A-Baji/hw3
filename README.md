# hw3
COSC 4370 Homework 3

## Environment:
* OS: Windows 10

* Language: C++

* IDE: Visual Studio

## Report

**Shaders**

For the shaders I have five files. One is just the vertex shader, and the other four are the fragment shaders for each different kind of lighting: ambient, diffuse, specular, and phong. The code for them is referenced from 

* https://learnopengl.com/Lighting/Basic-Lighting,

* https://learnopengl.com/code_viewer_gh.php?code=src/2.lighting/2.2.basic_lighting_specular/2.2.basic_lighting.vs,

* https://learnopengl.com/code_viewer_gh.php?code=src/2.lighting/2.2.basic_lighting_specular/2.2.basic_lighting.fs

The one vertex file works for all four of the fragment files. To switch between fragment files, change the file name on line 85 of main.cpp.

*Vertex*

In the vertex shader "phong.vs", we calculate the position of the fragment by multiplying the vertex position with model matrix. Then we multiply the normal vector by the inverse of the model matrix to prevent uneven scaling. Then we calculate the new position by multiplying the current projection matrix by the view matrix and then by the fragment position.

*Fragment*

In "ambient.frag", we calculate the ambient lighting by multiplying an ambient strength value by the lightColor vector. Then we get the resulting lighintg by multiply the ambient lighting by the ObjectColor vector.

In "diffuse.frag", we get the diffused lighting by calculating the dot product between the normal vector and the lightDir vector. Then we get the resulting lighting by multiply the diffused lighting by the ObjectColor vector.

In "specular.frag", we get the specular lighting by first calculating the reflection direction using the reflect() function, passing the negative value of the lightDir vector and the normal vector as parameters. Then we calculate a "spec" float value by raising the dot product between the normal vector and the lightDir vector to the 32nd power. Then we calculate the specular lighting vector by multiplying a specular strength float value by the spec value and then by the lightColor vector. Then we get the resulting lighting by multiply the specular lighting by the ObjectColor vector.

In "phong.frag", we combine all the techniques from the 3 different types of lightings. After calculating the ambient lighting, the diffused lighting, and the specular lighting, we find the sum of all three vectors and then multiply it by the objectColor vector.

**Main**

In "main.cpp", inside the game loop, I had to link the shader files to the main program. To link the fragment shader, we need a light position vector, a camera positionn vector, a light color vector, and an object color vector. After defining all of those, we link it to the fragment shader using glUniform3f. For the location parameter, we use glGetUniformLocation, passing lightingShader.Program and the appropriate vector as parameters. For the last 3 parameters we use the x, y and z of the corresponding vector. 

Then to link the vertex shader we define the model, view, and projection matrices. The model matrix is initialized with 1s. The view matrix is obtained with the GetViewMatrix() function of the camera class. The projection matrix is calculated with the perspective function, using the camera's zoom as the FOV, dividing the width and height to get the aspect ratio, and using a small value for the near plane and a large value for the far plane. These are then linked to the fragment file using glUniformMatrix4fv. We get the location parameter the same way as we did for the fragment shader, using glGetUniformLocation. For the size we use 1, the transpose boolean is false, and we use value_ptr() to get the pointer for the count values of the corresponding matrix.

**Camera**

In "Camera.h", I had to finish the GetViewMatrix. First a direction vector is declared. The x value is calculated by multiplying the cos of the yaw in radians by the cos of the pitch in radians. The y value is calculated by getting the sin of the pitch in radians. The z value is calculated by multiplying the sin of the yaw in radians by the cos of the pitch in radians. The front vector is then defined as the normal of the direction vector. The new front vector is used for the LookAt matrix.
